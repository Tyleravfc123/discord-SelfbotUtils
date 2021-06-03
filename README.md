> Stable branch

## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Code](#CodeSetup)
  - [Launch](#Launch)
  - [Additional](#Additional-Content)

# Description
This NPM package is written on pure Javascript with one library - Axios. This package allows you to easily raid small servers.
# Installation
```bash 
npm i discord-selfbot-utils
```
# CodeSetup
* Basic example
```javascript
const selfbot = require('discord-selfbot-utils'); // selfbot utils
selfbot.clearing(); // clears your console
const node = selfbot.node; // arguments and discord api
const arg = selfbot.arg; // process.argv
const axios = selfbot.axios; // axios
const message = selfbot.gen(count); // your message or built-in generator. You can put here everything after operator '='

selfbot.verify(channel, msg, emoji); // verify by reaction: string; Selfbots function only
selfbot.login(invitecode); // server login: string
selfbot.start(message, times); // spam func; where times is an amount of messages; message - message variable
```
* Real example
```javascript
const selfbot = require('discord-selfbot-utils');
const node = selfbot.node;
const arg = selfbot.arg; 
const axios = selfbot.axios;
const message = 'Hello!'; // or: selfbot.gen(1999)
selfbot.clearing();
selfbot.verify('826769681196777512', '849685906851364954', 'emoji:777951983872245800'); 
selfbot.login('HdLhHsx');
selfbot.start(message, 5);
```
# Launch
* Arguments example:
```bash
node . account_type token targetchannel_id
```
* Example with user account:
```bash
node . selfbot GeHmee.Shwowlw.wgoowJJhak 826769681196777512
```
* Example with bot account:
```bash
node . bot GeksbwHsj.Hshejzl.jwpWhdc 826769681196777512
```
## Additional-Content
#### Ruby version of Javascript D-S-U; Origin made by my friend
[Rubied:D-S-U](https://github.com/hackers-pr/ruby-selfbot-utils)
#### The page of NPM package of Javascript D-S-U
[JSed:D-S-U:NPM](https://www.npmjs.com/package/discord-selfbot-utils)