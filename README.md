[![CodeFactor](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils/badge)](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils)

> UNSTABLE features branch (in testing and may not work)

## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Code](#CodeSetup)
  - [Launch](#Launch)

# Description
Testing version of a discord-selfbot-utils package
# Installation
```bash 
npm i discordsub
```
# CodeSetup
```javascript
const selfbot = require('discordsub'); // selfbot utils
const node = selfbot.node; // arguments and discord api
const arg = selfbot.arg;
const axios = selfbot.axios;
const message = selfbot.gen(count); // your message or built-in generator. You can put here everything after operator '='

selfbot.clearing(); // clears your console
selfbot.verify(channel, msg, emoji); // reaction verify
selfbot.login(invitecode); // server invite code; Selfbots only
selfbot.start(message, times); // spam fumessage where times is an amount of messages; message - message variable
```
# Launch
* Arguments example:
 ```bash
node . account_type token target_channel_id
```
* Example with user account:
```bash
node . selfbot GeHmee.Shwowlw.wgoowJJhak 68617293018
```
* Example with bot account:
```bash
node . bot GeksbwHsj.Hshejzl.jwpWhdc 68617293018
```