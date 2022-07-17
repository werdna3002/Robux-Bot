const req = require('request');//Ease of access for Posting and Getting from API's
require('dotenv').config(); //Token Encrypter for the Discord and Roblox Token
//Discord Dependencies begin -------
const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES" ]});
const noblox = require("noblox.js");
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Intents } = require('discord.js');
//Discord Dependencies end ---------
//For Longevity service

const longe = require('./LongevityService.js');
//Log into the running session of the Holder account... can be changed in the .env file.

noblox.setCookie(process.env.CUKIE).then(function() {
    console.log("Logged In!");
})


//Prefacing for creating larger repositories of commands accesible as interactions and arguments
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

//Dynamic Event Handler
for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if(event.once){
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

longe.runner()
//Discord Dependency
   client.login(process.env.DISCORD_TOKEN); 
