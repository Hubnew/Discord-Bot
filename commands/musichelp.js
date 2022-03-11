module.exports = {
    name:'musichelp',
    permissions: [],
    description: "To komenda dla testów",
    execute(client, message, cmd, args, Discord){
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#1947EC')
        .setTitle('Help')
        .setURL('https://cdn.discordapp.com/avatars/469177462761193484/32afb431cf6a61128d04ac1a522e1540.webp')
        .setAuthor('HubnewYT#5070')
        .setDescription('Commands for music')
        .addFields(
            {name:'Music commands', value: 'Look below'},
            {name:'Start plaing music', value: '$play(link or phase)'},
            {name:'Disconecting bot', value: '$leave/$stop'},
            {name:'Skipping song', value: '$skip'},
            {name:'Pausing bot', value: '$pause'},
            {name:'Future commands', value: 'Loop (Doesnt work yet)'},
        )
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setFooter('Test')

        message.channel.send(exampleEmbed)
    }
}