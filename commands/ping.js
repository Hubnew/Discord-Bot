module.exports = {
    name:'ping',
    permissions: [],
    description: "To komenda dla testów",
    execute(client, message, args, Discord){
        message.channel.send('pong');

    }
}