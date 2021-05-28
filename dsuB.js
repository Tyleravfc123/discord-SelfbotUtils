const arg = process.argv.slice(2);
const axios = require('axios');
const node = { // arguments object
  acc: arg[0], // account type
  token: arg[1], // token
  cid: arg[2], // channel id
  serv: arg[3], // server invite code
  dapi: 'https://discordapp.com/api/v8/', // discord api
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
     try {
       await axios({url: node.dapi + 'invites/' + node.serv, method: 'POST', headers: {Authorization: node.token}});
     } catch (err) {
         console.log('Error: ' + err);
   }}
}

/**
 * Verifies you by reaction
 * @param {string} channel - ChannelId
 * @param {string} msg - MessageId in this channel
 * @param {string} emji - Emoji name:id
 */
async function verify(channel, msg, emji) {
   let newemji = encodeURIComponent(emji);
     await axios({
        url: node.dapi + `channels/${channel}/messages/${msg}/reactions/${newemji}/@me`,
        method: "PUT", 
        headers: {
        Authorization: `${node.token}`
        }})
        .catch((e) => {
          console.log(e);
          });
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
        url: node.dapi + `channels/${node.cid}/messages`,
        method: "POST", 
        headers: {
        authorization: `${node.token}`,
        "Content-Type": "application/json"},
        data: JSON.stringify({content: message})}).then(console.log('Message sent')).catch((e) => {
           console.log('Error: ' + e);
        });
}} else if (node.acc === 'bot') { // bot parameter
   for(let i=0; i < times; i++) {
    await axios({
      url: node.dapi + `channels/${node.cid}/messages`,
      method: "POST", 
      headers: {
       authorization: `Bot ${node.token}`,
       "Content-Type": "application/json"},
       data: JSON.stringify({content: message})
     }).then(console.log('Message sent')).catch((e) => {
       console.log('Error: ' + e);
     });
   }
} else {
   console.log('Please, set existing account type');
}}
// export------------------------------/
module.exports.arg = arg;
module.exports.axios = axios;
module.exports.node = node;
module.exports.clearing = clearing;
module.exports.gen = gen;
module.exports.verify = verify;
module.exports.login = login;
module.exports.start = start;