const fs = require('fs');

module.exports = (client, Discord) =>{
    const command_Files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); 
    for(const file of command_Files){
        const command = require(`../commands/${file}`)
        if(command.name){
            client.commands.set(command.name, command)
            
        } else {
            continue;
        }
    }
}