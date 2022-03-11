module.exports = {
    name:'info',
    permissions: [],
    description: "BLAH BLAH",
    execute(client, message, cmd, args, Discord){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Help')
        .setURL('https://cdn.discordapp.com/avatars/469177462761193484/32afb431cf6a61128d04ac1a522e1540.webp')
        .setAuthor('HubnewYT#5070')
        .setDescription('About me')
        .addFields(
            {name:'Who am i?', value: 'My name is HubnewYT im upcoming discord bot developer and youtuber/streamer'},
            {name:'How old are you?', value: 'Im old enough to use discord'},
            {name:'Where do you live?', value: 'Poland'},
            {name:'When stream?', value: 'Saturday and Sunday on vacaction every day at 5PM CEST'},
            {name:'Do you have facebook', value: 'Yes but is private and only for irl friends'},
            {name:'Do you use Twitter?', value: 'https://twitter.com/hubnewyt'},
            {name:'Where do you stream?', value: 'Youtube(Sometimes), Twitch(Mostly'},
            {name:'What games do you play?', value: 'Minecraft, Roblox, FNF, Euro Truck Simulator 2, there is more games'},
            {name:'Will you add to friends?', value: 'No'},
        )
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setFooter('Works it is good')

        message.channel.send(exampleEmbed)
    }
}