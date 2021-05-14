# Description
This npm package allows you to spam chat with unicode characters & join to servers & verify your account by reaction in a targeted servers.
# Installation
```bash 
npm i
mkdir selfbot
cd selfbot
npm i discord-selfbot-utils
```
# Code Setup( d-s-u v1.7.6 Stable )
```javascript
const selfbot = require('discord-selfbot-utils'); // selfbot utils
selfbot.clearing(); // clears your console
const message = selfbot.gen(1999); // your message or d-s-u generator. You can put here everything after '='
const axios = selfbot.axios; // axios module
const arg = selfbot.arg; // process.argv
const dapi = selfbot.dapi; // discord api variable
const alerts = selfbot.alerts; // error catcher's
const utils = selfbot.utils; // arguments
selfbot.verify(channel, msg, emoji); // reaction verify
selfbot.login(); // server invite logging
selfbot.start(message, times); // spam function: times is an amount of messages; message - message variable
```
# Launch
#### Arguments example:
 ```bash
node . account_type token target_channel_id server_invite
```
#### Example with user account:
```bash
node . selfbot GeHmee.Shwowlw.wgoowJJhak 68617293018 HdLhHsx
```
#### Example with bot account(You can't invite bot to the server):
```bash
node . bot GeksbwHsj.Hshejzl.jwpWhdc 68617293018
```
If you don't need to login to the server, just don't enter the server invite code.
#### Notice: Server login can't be used at Bot discord account, only selbots.
#### You can report bug at issues page! Please, do it if you find any bug!
#### Github page of my utils version
https://github.com/nyandimon/discord-SelfbotUtils
#### Github page of ruby utils version, which inspired me
https://github.com/hackers-pr/ruby-selfbot-utils#
