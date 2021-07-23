/*jshint loopfunc:true */
const arg = process.argv.slice(2);
const axios = require("axios");

const chalk = require("chalk");

const errorMessage = (origin) => {
    let strOrigin = String(origin);
    return chalk.bold.red("Error!\n") + chalk.red(strOrigin);
};
const successMessage = (origin) => {
    let strOrigin = String(origin);
    return chalk.bold.green(strOrigin);
};

const node = { // arguments object
  token: arg[0], // token
  cid: arg[1], // channel id
  dapi: "https://discordapp.com/api/v8/", // discord api
  isBot: false
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
       method: "POST",
       headers: {
       Authorization: node.token}})
       .then(res => {
           console.log(successMessage("Login was successful!"));
       })
       .catch(err => {
         console.error(errorMessage(err));
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
        authorization: node.token}
     })
     .then(res => {
       console.log(successMessage("Verified!"));
     })
     .catch(err => {
       console.error(errorMessage("Error!\n") + err);
      })
  }
}

/**
 * Starts the spam
 * @param {string} message - Message that eill be spammed
 * @param {number} times - Number of messages / 1.5
 */
async function spam(message, times = 1) {
   if (!node.cid) {
     throw new Error("You haven't entered the channel id");
   }
   else {
     let botSpace;
     let botSpaceChecker = (node.isBot === true) ? botSpace = "Bot " : botSpace = "";
     for(let i = 0; i < times; i++) {
       await axios({
        url: `${node.dapi}channels/${node.cid}/messages`,
        method: "POST", 
        headers: {
        authorization: botSpace + node.token,
        "Content-Type": "application/json"},
        data: JSON.stringify({content: message})
       })
        .then(res => console.log(successMessage("Message sent")))
        .catch(err => 
           console.error(errorMessage(err)));
     }
   }
}

module.exports = {
  arg,
  axios,
  node,
  clearing,
  gen,
  login, 
  verify, 
  spam,
  chalk,
  errorMessage,
  successMessage
};