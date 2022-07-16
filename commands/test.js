
const {SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
      //Build a payout command front end.
	  .setName('testest')
        .setDescription('Pay set amount to queried Roblox account')
        .addIntegerOption(option =>
            option.setName('int')
            .setDescription('Amount you would like paid out')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('input')
            .setDescription('Username of desired person')
            .setRequired(true)),


};
