const { noPingRole, TimeOutTime } = require('../config');
const { Client, GuildMember } = require('discord.js');

module.exports = {
    name:'messageCreate',
    once: false,
    execute(message) {
        //Simpletartupcript
    if(message.content.includes('<@&' + noPingRole + '>')){
//        message.guild.roles.fetch().then(roles => console.log(roles)).catch(console.error);
        console.log(message.author.id);
       message.member.timeout(TimeOutTime * 60 * 1000, 'lol').catch(err => message.reply('I dont have valid permissions to mute you!'));
        }
    },

};
