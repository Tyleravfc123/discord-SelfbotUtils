> UNSTABLE features branch (in testing and may not work)

## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Code](#CodeSetup)
  - [Launch](#Launch)
  - [Additional](#Additional)

# Description
Testing version of a discord-selfbot-utils package
# Installation
```bash 
npm i discordsub
```
# CodeSetup
* Arguments
```javascript
const { spam, verify, login, node, axios, arg, gen, clearing } = require('discordsub');
const message = gen(count); // your message or built-in generator. You can put here everything after operator '='

clearing(); // standart: '\x1Bc' or your clearing method. example: clearing('special symbols...');
verify(channel, msg, emoji); // verify by reaction: string; Selfbots function only
login(invitecode); // server invite code; Selfbots only
spam(message, times); // where times is an amount of messages; message - message variable; Selfbots only
spamtest(message, times); // Beta fx; Bot only
```
* Example
```javascript
const { spam, verify, login, node, axios, arg, gen, clearing } = require('discordsub');
const message = 'Hello!'; // or: gen(1999)
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
## Additional
#### Ruby version of Javascript D-S-U; Origin made by my friend
[Rubied:D-S-U](https://github.com/hackers-pr/ruby-selfbot-utils)
#### The page of NPM package of Javascript D-S-U
[JSed:D-S-U:NPM](https://www.npmjs.com/package/discord-selfbot-utils)