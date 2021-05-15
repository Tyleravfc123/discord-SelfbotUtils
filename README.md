[![CodeFactor](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils/badge)](https://www.codefactor.io/repository/github/nyandimon/discord-selfbotutils)
# Description
This npm package allows you to spam chat with unicode characters & join to servers, verify your account by reaction in a targeted servers.
# Installation
```bash 
npm i discord-selfbot-utils
```
# Code Setup( d-s-u v1.7.7 Stable )
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
> Notice: Server login can't be used at Bot discord account, only selbots.
## Github page of RUBY utils version, which inspired me
[DiscordUtils]: https://github.com/hackers-pr/ruby-selfbot-utils
