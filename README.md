[![CodeFactor](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils/badge)](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils)

> Stable branch

## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Code](#CodeSetup)
  - [Launch](#Launch)
  - [Ruby Version](#RubyVersion)

# Description
This NPM package is written on pure Javascript with some libraries: Axios, process.argv; This package allows you to easily raid small servers.
# Installation
```bash 
npm i discord-selfbot-utils
```
# CodeSetup
```javascript
selfbot.clearing(); // clears your console
const selfbot = require('discord-selfbot-utils'); // selfbot utils
const message = selfbot.gen(1999); // your message or d-s-u generator. You can put here everything after '='
const axios = selfbot.axios; // axios module
const arg = selfbot.arg; // process.argv
const cautions = selfbot.cautions; // error catcher's
const node = selfbot.node; // arguments and dapi
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
## RubyVersion
[DiscordUtils](https://github.com/hackers-pr/ruby-selfbot-utils)