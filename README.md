> Unstable branch (May not work properly)

## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Code](#CodeSetup)
  - [Launch](#Launch)
  - [Stuff](#Usable-Stuff)
  - [Additional](#Additional-Content)

# Description
Small package for raiding discord servers with ONE bot, but until some time. Uses Axios, Chalk and process.argv.
# Installation
```bash 
npm i discord-selfbot-utils
```
# CodeSetup
* Arguments
```javascript
const { spam, verify, login, node, axios, arg, gen, clearing, chalk, errorMessage, successMessage } = require('discord-selfbot-utils');
const message = gen(count); // your message or built-in generator. You can put here everything after operator '='
node.isBot = bool; // false is set by default
clearing(); // standart: '\x1Bc' or your clearing method. example: clearing('special symbols...');
verify(channel, msg, emoji); // verify by reaction: string; Selfbots function only
login(invitecode); // server invite code; Selfbots only
spam(message, times); // where times is an amount of messages; message - message variable; Selfbots only
```
* Example
```javascript
const { spam, verify, login, node, axios, arg, gen, clearing, chalk, errorMessage, sucessMessage } = require('discord-selfbot-utils');
const message = 'Hello!'; // or: gen(1999)
node.isBot = false;
clearing();
verify('826769681196777512', '849685906851364954', 'emoji:777951983872245800'); 
login('HdLhHsx');
spam(message, 5);
```
# Launch
* Arguments example:
 ```bash
node . token channel_id
```
* Example with user account:
```bash
node . GeHmee.Shwowlw.wgoowJJhak 68617293018
```
# Usable-Stuff
* If `node.isBot` is set as **true**, code will launch as bot only (`node.isBot = true`);
* Red messages mean that error is serious and may not be eliminated (errors: 429, 401, etc);
* Orange messages mean that the error can be easily eliminated (Undefined parameters in node varible or process.argv);
* Green messages mean that everything is great;

## Additional-Content
#### Ruby version of Javascript D-S-U; Origin made by my friend
[Rubied:D-S-U](https://github.com/hackers-pr/ruby-selfbot-utils)
#### The page of NPM package of Javascript D-S-U
[JSed:D-S-U:NPM](https://www.npmjs.com/package/discord-selfbot-utils)