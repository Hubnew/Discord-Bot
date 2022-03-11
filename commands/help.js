module.exports = {
    name:'help',
    permissions: [],
    description: "BLAH BLAH",
    execute(client, message, cmd, args, Discord){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1947EC')
        .setTitle('Help')
        .setURL('https://cdn.discordapp.com/avatars/469177462761193484/32afb431cf6a61128d04ac1a522e1540.webp')
        .setAuthor('HubnewYT#5070')
        .setDescription('Commands and my socials')
        .addFields(
            {name:'Commands', value: '$ping, $musichelp, $ban(mods only), $kick(mods only), more will be added as time goes on,'},
            {name:'My socials', value: 'Look below'},
            {name:'Twitch', value: 'https://twitch.tv/hubnewyt'},
            {name:'Youtube', value: 'https://www.youtube.com/channel/UC5mqePX9UehoiC6nvN8CRcg'},
            {name:'Discord', value: 'HubnewYT#5070'},
            {name:'Discord Server', value: 'https://discord.gg/AVnryyv'},
            {name:'More info about me and bot', value: '$info'},
        )
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setFooter('Works it is good')

        message.channel.send(exampleEmbed)
    }
}