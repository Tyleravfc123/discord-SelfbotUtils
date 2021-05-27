[![CodeFactor](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils/badge)](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils)

> UNSTABLE features branch (in testing and may not work)

## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Code](#CodeSetup)
  - [Launch](#Launch)

# Description
This unstable branch is not supported in use, it only under development. I will make 2nd npm package for this branch, named 'd-s-uBeta'. 
# Installation
```bash 
npm i discordsub
```
# CodeSetup
```javascript
const selfbot = require('discord-selfbot-utils'); // selfbot utils
const node = selfbot.node; // arguments and discord api
const arg = selfbot.arg;
const axios = selfbot.axios;
const message = selfbot.gen(1999); // your message or built-in generator. You can put here everything after operator '='

selfbot.clearing(); // clears your console
selfbot.verify(channel, msg, emoji); // reaction verify
selfbot.login(); // server invite logging
selfbot.start(message, times); // spam function: times is an amount of messages; message - message variable
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