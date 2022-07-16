//Node Dependencies to navigate files
const fs = require('node:fs');
const path = require('node:path');

//Mini-API generators to help with Discord command forwarding
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');
//Encrypted passwords and Tokens
require('dotenv').config();


const commands = []; 
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

//For loop iterating through commandfiles in the Commands directory, creating commands for each
for(const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

//Establishing API for the back-end to front-end communication of the discord commands
const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

//Dirty work pushing commands to the client side
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands})
    .then(() => console.log('successfully registered application commands.'))
    .catch(console.error);
