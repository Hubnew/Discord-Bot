module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: "Kick Command!",
    execute(client, message, cmd, args, Discord){
        const target = message.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setTitle("User has been kicked")
        .setDescription(`**${target.tag}** has been kicked by **${message.author.tag}** form the server`)
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(embed);
        }else{
            message.channel.send(`Member not found!`);
        }
    }
}