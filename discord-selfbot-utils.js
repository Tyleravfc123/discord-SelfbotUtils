const axios = require('axios');
const arg = process.argv.slice(2);
const dapi = 'https://discordapp.com/api/v8/';

const node = { // arguments object
  acc: arg[0], // account type
  token: arg[1], // token
  cid: arg[2], // channel id
  serv: arg[3] // server invite code
};

const cautions = { // error messages
  sww: 'Something went wrong',
  sp: "Your account got phonelocked/banned trough discord OR you logging into 'selfbot' with 'bot' parameter'",
  bp: "Your account got phonelocked/banned trough discord OR you logging into 'bot' with 'selfbot' parameter'",
  dst: 'Discord sending timeout',
  ms: 'message sent'
};
/**
 * Clears console
 */
function clearing() {
   let clearing = require('process').stdout.write('\x1Bc');
}
/** 
 * Generates a lot of symbols
 * @param {number} len - length of the message
 */
function gen(len) {
   let text = "";
   for(let i = 0; i < len; i++) {
     text += String.fromCharCode(Math.floor(Math.random() * 2000));
   }
   text = text.replace(/\`/g, "").replace(/\r?\n/g, "");
   return text;
}
/**
 * Logs you into the server with invite
 */
async function login() {
   if(!node.serv) return;
   else {
       await axios({url: dapi + 'invites/' + node.serv, method: 'POST', headers: {Authorization: node.token}}).catch(function(e){console.log(e)});
   } 
}
/**
 * Verifies you by reaction
 * @param {string} channel - ChannelId
 * @param {string} msg - MessageId in this channel
 * @param {string} emji - Emoji name:id
 */
function verify(channel, msg, emji) {
      let newemji = encodeURIComponent(emji);
       axios({
         url: dapi + `channels/${channel}/messages/${msg}/reactions/${newemji}/@me`,
         method: "PUT", 
         headers: {
         authorization: node.token}}).catch(function(e) {
             console.log(e)});
}
/**
 * Starts the spam
 * @param {string} message - Message that eill be spammed
 * @param {number} times - Number of messages / 1.5
 */
async function start(message, times) {
   if (!node.cid) {
     console.log('You have not entered the channel id'); // if no channel to spam
     process.exit();
   } else if (node.acc === 'selfbot') { // if selfbot parameter
     for(let i=0; i < times; i++) {
         await axios({
           url: dapi + `channels/${node.cid}/messages`,
           method: "POST", 
           headers: {
           authorization: `${node.token}`,
           "Content-Type": "application/json"},
           data: JSON.stringify({content: message})
 }).then(console.log(cautions.ms)).catch(function(e) {
  if(e.response.status == 429) {
  console.log(cautions.dst);
  } else if (e.response.status == 403) {
    console.log(cautions.sp);
  } else {
    console.log(cautions.sww);
}});
}} else if (node.acc === 'bot') { // bot parameter
   for(let i=0; i < times; i++) {
    await axios({
      url: dapi + `channels/${node.cid}/messages`,
      method: "POST", 
      headers: {
       authorization: `Bot ${node.token}`,
       "Content-Type": "application/json"},
       data: JSON.stringify({content: message})
     }).then(console.log(cautions.ms)).catch(function(e) {
       if(e.response.status == 429) {
       console.log(cautions.dst + e);
       } else if (e.response.status == 403) {
      console.log(cautions.bp + e);
       } else {
        console.log(cautions.sww)}
       });
}} else {
  console.log('Please, set normal account type');
}}
//export------------------------|
module.exports.axios = axios;
module.exports.arg = arg;
module.exports.dapi = dapi;
module.exports.node = node;
module.exports.cautions = cautions;
module.exports.clearing = clearing;
module.exports.gen = gen;
module.exports.verify = verify;
module.exports.login = login;
module.exports.start = start;