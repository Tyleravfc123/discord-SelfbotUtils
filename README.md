[![CodeFactor](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils/badge)](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils)

> Stable branch

## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Code](#CodeSetup)
  - [Launch](#Launch)
  - [Ruby Version](#RubyVersion)

# Description
This NPM package is written on pure Javascript with one library - Axios. This package allows you to easily raid small servers.
# Installation
```bash 
npm i discord-selfbot-utils
```
# CodeSetup
* Basic example
```javascript
selfbot.clearing(); // clears your console
const selfbot = require('discord-selfbot-utils'); // selfbot utils
const node = selfbot.node; // arguments and discord api
const arg = selfbot.arg; // process.argv
const axios = selfbot.axios; // axios
const message = selfbot.gen(1999); // your message or built-in generator. You can put here everything after operator '='

selfbot.clearing(); // clears your console
selfbot.verify(channel, msg, emoji); // reaction verify; ONLY FOR SELFBOTS!!!!!!
selfbot.login(); // server invite logging
selfbot.start(message, times); // spam fumessage where times is an amount of messages; message - message variable
```
* Real example
```javascript
selfbot.clearing(); 
const selfbot = require('discord-selfbot-utils');
const node = selfbot.node;
const arg = selfbot.arg; 
const axios = selfbot.axios;
const message = 'HELLO'; // or: selfbot.gen(count)
selfbot.clearing();
selfbot.verify(6819284747291, 571892847471, 'emoji:01837749291'); 
selfbot.login();
selfbot.start(message, 5);
```
# Launch
* Arguments example:
```bash
node . account_type token target_channel_id server_invite
```
* Example with user account:
```bash
node . selfbot GeHmee.Shwowlw.wgoowJJhak 68617293018 HdLhHsx
```
* Example with bot account(You can't invite bot to the server):
```bash
node . bot GeksbwHsj.Hshejzl.jwpWhdc 68617293018
```
## RubyVersion
[DiscordUtils](https://github.com/hackers-pr/ruby-selfbot-utils)