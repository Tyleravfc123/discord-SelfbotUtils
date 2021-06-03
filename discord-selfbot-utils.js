const arg = process.argv.slice(2);
const axios = require('axios');
const node = { // arguments object
  acc: arg[0], // account type
  token: arg[1], // token
  cid: arg[2], // channel id
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
 * @param {string} invitecode - the code of server invite
 */
async function login(invitecode) {
  if (Object.prototype.toString.call(invitecode) === "[object String]") {
       await axios({
       url: `${node.dapi}/invites/${invitecode}`,
       method: 'POST',
       headers: {
       Authorization: node.token}})
       .catch((e) => {
         console.error(e);
       });
  } else console.error('Is an invitecode === \'[object String]\'?');
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
        url: `${node.dapi}channels/${channel}/messages/${msg}/reactions/${newemji}/@me`,
        method: "PUT", 
        headers: {
        authorization: node.token}})
        .catch((e) => {
          console.error('Error: ' + e);
          });
}

/**
 * Starts the spam
 * @param {string} message - Message that eill be spammed
 * @param {number} times - Number of messages / 1.5
 */
async function start(message, times = 1) {
   if (!node.cid) {
     throw new Error('You haven\'t entered the channel id');
   } else if (node.acc === 'selfbot') { // if selfbot parameter
     for(let i=0; i < times; i++) {
       await axios({
        url: `${node.dapi}channels/${node.cid}/messages`,
        method: "POST", 
        headers: {
        authorization: node.token,
        "Content-Type": "application/json"},
        data: JSON.stringify({content: message})}).then(console.log('Message sent')).catch((e) => {
           console.error('Error: ' + e);
        });
}} else if (node.acc === 'bot') { // bot parameter
   for(let i=0; i < times; i++) {
    await axios({
      url: `${node.dapi}channels/${node.cid}/messages`,
      method: "POST", 
      headers: {
       authorization: `Bot ${node.token}`,
       "Content-Type": "application/json"},
       data: JSON.stringify({content: message})
     }).then(console.log('Message sent')).catch((e) => {
       console.error('Error: ' + e);
     });
   }
} else {
   console.error('Please, set an existing account type');
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