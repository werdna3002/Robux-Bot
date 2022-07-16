//Roblox Dependencies to interact with API
const noblox = require('noblox.js');
const { PayOutRoles } = require('../config')   
let penis = true

//Token Encrypter for the Discord and Roblox Token
require('dotenv').config();

//Placeholder Variables to deal with user logging on the frontend, and interfacing it with the API
let id;
let asf;

module.exports = {
    name: 'interactionCreate',
    once: 'false',
    execute(interaction){
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
     console.log(PayOutRoles[0]) 

       function getmeouttahere() { console.log('yer out');
       return;}

        //Command for doing a roblox payout.
      if(interaction.commandName === 'payout'){
            for(var i = 0; i < PayOutRoles.length; i++){
                if(interaction.user.id == PayOutRoles[i]){//Command Limiter
                    noblox.setCookie(process.env.CUKIE).then(function() {
                    })
                    //takes string input of username, turns it into ID
              noblox.getIdFromUsername(interaction.options.getString('input')).then(async function(result){
                    //Parsing the ID object for usage with the API
                        asf = await result;
                        id = JSON.parse(asf);
                        console.log(id)
                        if(asf){
                        noblox.groupPayout(14141409, asf, interaction.options.getInteger('int')).catch(err => {interaction.channel.send('There was an issue with the username transfer...');
                     interaction.channel.send('User is not in group, or has not been here long enough');  
                       });}
                        await console.log("Paid "+ interaction.options.getInteger('int') + " to " + interaction.options.getString('input'));
                        return interaction.reply("Paid "+ interaction.options.getInteger('int') + " to " + interaction.options.getString('input'));
}).catch((e)=>{
                   
                   // console.log(err)
                   interaction.reply('Error, user does not exist');
                    return "error thrown";})
                };

    }
    }        
    },
};
