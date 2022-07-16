module.exports = {
    name:'ready',
    once: true,
    execute(client) {
        //Simpletartup Script
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },

};
