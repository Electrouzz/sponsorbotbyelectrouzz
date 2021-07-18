const Discord = require("discord.js");
const config = require("../config.json")
var pModule = require('../pubing.js');

/* EMBED */

var eHelp = new Discord.MessageEmbed()
    .setTitle("Voici les commandes ")
    .addField(config.prefix + "pub token_bot", "This command is used to send a message to all members of a server.")
    .addField(config.prefix + "puball token_bot", "This command is used to send a message to all server members")
    .addField(config.prefix + "pubcoen token_bot", "This command is used to send a message to all online members of a server.")
    .addField(config.prefix + "puballcoen token_bot", "This command is used to send a message to all online server members.")
    .setColor(config.embedColor)

module.exports.run = async (client, message, args) => {
    message.channel.send(eHelp)
}

module.exports.help = {
    name: "helpen"
}