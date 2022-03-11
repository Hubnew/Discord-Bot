const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const commonTags = require('common-tags')


const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();




['command_handler', 'event_handler'].forEach(handler =>{
     require(`./handlers/${handler}`)(client, Discord);
})



















client.login('OTA5ODI1NTQ4ODQ1NDYxNTU0.YZJ7Eg.2HPlJ1VtdOou24Zo_604x3zhtvk');
