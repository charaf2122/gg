const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("598996671438782477")
setInterval(function() {
channel.send(`cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdz cuzdzcuzdz cuzdz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);