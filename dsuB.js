module.exports = {
//-Cnt----------------------------------------
  arg: process.argv.slice(2),
  axios: require('axios'),
  acc: this.arg[0], // account type
  token: this.arg[1], // token
  cid: this.arg[2], // channel id
  dapi: 'https://discordapp.com/api/v8/', // discord api
//-Fx----------------------------------------
  clearing: (cl = '\x1Bc') => {
    let clearing = require('process').stdout.write(cl);
  },
  gen: (len = 1999) => {
   let text = "";
   for(let i = 0; i < len; i++) {
     text += String.fromCharCode(Math.floor(Math.random() * 2000));
   }
   text = text.replace(/\`/g, "").replace(/\r?\n/g, "");
   return text;
  },
  login: async () => {
   if (arguments[0] == undefined) return;
    else {
       await this.axios({
       url: `${this.dapi}/invites/${arguments[0]}`,
       method: 'POST',
       headers: {
       Authorization: this.token}})
       .catch((e) => {
         console.error(e);
       })}
  },
  verify: async () => {
   if (arguments[0] == undefined) return;
   else {
     let newemji = encodeURIComponent(arguments[2]);
     await this.axios({
        url: `${this.dapi}channels/${arguments[0]}/messages/${arguments [1]}/reactions/${newemji}/@me`,
        method: "PUT", 
        headers: {
        authorization: this.token}})
        .catch((e) => {
          console.error('Error: ' + e);
          })}
  },
  start: async (times = 1) => {
    if (!this.cid) {
     throw new Error('You haven\'t entered the channel id');
   } else if (this.acc === 'sbot') { // if selfbot parameter
     for(let i=0; i < times; i++) {
       await this.axios({
        url: `${this.dapi}channels/${this.cid}/messages`,
        method: "POST", 
        headers: {
        authorization: this.token,
        "Content-Type": "application/json"},
        data: JSON.stringify({content: arguments[1]})}).then(console.log('Message sent')).catch((e) => {
           console.error('Error: ' + e);
        });
}} else if (this.acc === 'bot') { // bot parameter
   for(let i=0; i < times; i++) {
    await this.axios({
      url: `${this.dapi}channels/${this.cid}/messages`,
      method: "POST", 
      headers: {
       authorization: `Bot ${this.token}`,
       "Content-Type": "application/json"},
       data: JSON.stringify({content: arguments[1]})
     }).then(console.log('Message sent')).catch((e) => {
       console.error('Error: ' + e);
     });
   }
} else {
   console.error('Please, set an existing account type');
}
  }
};