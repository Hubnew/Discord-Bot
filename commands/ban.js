module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    description: "ban Command!",
    execute(client, message, cmd, args, Discord){
        const target = message.mentions.users.first();
        const embed = new Discord.MessageEmbed()
        .setTitle("User has been banned")
        .setDescription(`**${target.tag}** has been banned by **${message.author.tag}**`)
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(embed);
        }else{
            message.channel.send(`Member not found!`);
        }
    }
}