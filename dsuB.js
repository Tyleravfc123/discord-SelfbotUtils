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
function clearing(cl = '\x1Bc') {
   let clearing = require('process').stdout.write(cl);
}

/** 
 * Generates a lot of symbols
 * @param {number} len - length of the message
 */
function gen(len = 1999) {
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
async function login() {
  if (arguments[0] == undefined) return;
  else {
       await axios({
       url: `${node.dapi}/invites/${arguments[0]}`,
       method: 'POST',
       headers: {
       Authorization: node.token}})
       .catch((e) => {
         console.error(e);
       })}
}

/**
 * Verifies you by reaction
 * @param {string} channel - ChannelId
 * @param {string} msg - MessageId in this channel
 * @param {string} emji - Emoji name:id
 */
async function verify() {
  if (arguments[0] == undefined) return;
  else {
   let newemji = encodeURIComponent(arguments[2]);
     await axios({
        url: `${node.dapi}channels/${arguments[0]}/messages/${arguments [1]}/reactions/${newemji}/@me`,
        method: "PUT", 
        headers: {
        authorization: node.token}})
        .catch((e) => {
          console.error('Error: ' + e);
          })}
}

/**
 * Starts the spam
 * @param {string} message - Message that eill be spammed
 * @param {number} times - Number of messages / 1.5
 */
async function spam(message, times = 1) {
   if (!node.cid) {
     throw new Error('You haven\'t entered the channel id');
   } else if (node.acc === 'sbot') { // if selfbot parameter
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

let modix = () => {
  console.log(module);
};

module.exports = {
  arg,
  axios,
  node,
  clearing,
  gen,
  login, 
  verify, 
  spam,
  modix
};