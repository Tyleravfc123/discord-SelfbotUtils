const axios = require('axios');
const arg = process.argv.slice(2);
const dapi = 'https://discordapp.com/api/v8/';

const utils = { // arguments object
  acc: arg[0], // account type
  token: arg[1], // token
  cid: arg[2], // channel id
  serv: arg[3] // server invite code
};

const alerts = { // error messages
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
   if(!utils.serv) return;
   else {
       await axios({url: dapi + 'invites/' + utils.serv, method: 'POST', headers: {Authorization: utils.token}}).catch(function(e){console.log(e)});
}}
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
         authorization: utils.token}}).catch(function(e) {
             console.log(e)});
}
/**
 * Starts the spam
 * @param {string} message - Message that eill be spammed
 * @param {number} times - Number of messages / 1.5
 */
async function start(message, times) {
   if (!utils.cid) {
     console.log('You have not entered the channel id'); // if no channel to spam
     process.exit();
   }else if (utils.acc == 'selfbot'){ // if selfbot parameter
     for(let i=0; i < times; i++) {
       //try {
         await axios({
           url: dapi + `channels/${utils.cid}/messages`,
           method: "POST", 
           headers: {
           authorization: `${utils.token}`,
           "Content-Type": "application/json"},
           data: JSON.stringify({content: message})
 }).then(console.log(alerts.ms)).catch(function(  e) {
   if(e.response.status == 429) {
  console.log(alerts.dst)}
  else if (e.response.status == 403){console.log(alerts.sp)}else {console.log(alerts.sww)}
 });
}}else if(utils.acc == 'bot') { // bot parameter
       for(let i=0; i < times; i++) {
    await axios({
      url: dapi + `channels/${utils.cid}/messages`,
    method: "POST", 
    headers: {
       authorization: `Bot ${utils.token}`,
       "Content-Type": "application/json"},
       data: JSON.stringify({content: message})
     }).then(console.log(alerts.ms)).catch(function(e) {
       if(e.response.status == 429) {
  console.log(alerts.dst)}
  else if (e.response.status == 403){console.log(alerts.bp)}else {console.log(alerts.sww)}
     });
}}}
//export------------------------|
module.exports.axios = axios;
module.exports.arg = arg;
module.exports.dapi = dapi;
module.exports.utils = utils;
module.exports.alerts = alerts;
module.exports.clearing = clearing;
module.exports.gen = gen;
module.exports.verify = verify;
module.exports.login = login;
module.exports.start = start;