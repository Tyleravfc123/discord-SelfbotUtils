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
const sb = require('discord-selfbot-utils'); // selfbot utils
sb.clearing(); // standart:'\x1Bc'; or your clearing method. example: sb.clearing('special symbols...');
const node = sb.node; // arguments and discord api
const arg = sb.arg; // process.argv
const axios = sb.axios; // axios
const message = sb.gen(count); // your message or built-in generator. You can put here everything after operator '='

sb.verify(channel, msg, emoji); // verify by reaction: string; Selfbots function only
sb.login(invitecode); // server login: string
sb.start(message, times); // spam func; where times is an amount of messages; message - message variable
```
* Real example
```javascript
const sb = require('discord-selfbot-utils');
const node = sb.node;
const arg = sb.arg; 
const axios = sb.axios;
const message = 'Hello!'; // or: sb.gen(1999)
sb.clearing();
sb.verify('826769681196777512', '849685906851364954', 'emoji:777951983872245800'); 
sb.login('HdLhHsx');
sb.start(message, 5);
```
# Launch
* Arguments example:
```bash
node . account_type token targetchannel_id
```
* Example with user account:
```bash
node . sbot GeHmee.Shwowlw.wgoowJJhak 826769681196777512
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