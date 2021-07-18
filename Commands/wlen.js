const Discord = require("discord.js");
const config = require("../config.json")




    /* EMBED */


var embed_wl_error = new Discord.MessageEmbed()
    .setDescription(`**${config.m_wl_error}**`)
    .setColor(config.embedColor)

var embed_wl_null = new Discord.MessageEmbed()
    .setDescription(` ${config.m_wl_null} `)
    .setColor(config.embedColor)



/* _________________________________________________________ */



module.exports.run = async (client, message, args) => {




    if(!message.member.roles.cache.get(config.helperRole)) return;

    let target;

    if(!message.mentions.members.first()){
        if(!args[0]){
            return message.channel.send(embed_wl_null);
        } else {
            target = message.guild.members.cache.get(args[0])

            if(!target) return message.channel.send(embed_wl_error);

            message.guild.channels.create(target.user.username, {type: "text", permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'],
                },
                {
                    id: target.id,
                    allow: ['VIEW_CHANNEL'],
                },
            ],}).then(channel => {
                target.roles.add(config.wlrole)
                channel.send(new Discord.MessageEmbed() 
                    .setTitle(`**Welcome on your private salon, ${target.user.username}**`)
                    .setDescription(`You now have your own private lounge to advertise with Asimo Sponsorbot !
                    Remember that you must have one or more bot tokens to use Asimo Sponsorbot, if you don't have a token yet, contact a helper to find out more.`)
                    .setColor(config.embedColor)
                )
    
                channel.send(new Discord.MessageEmbed() 
                    .setTitle("How to use Asimo Sponsorbot")
                    .setDescription("__***Voici les commandes que vous pouvez utiliser avec Asimo Sponsorbot:***__")
                    .addField(config.prefix + "puben token_bot", "This command is used to send a message to all members of a server.")
                    .addField(config.prefix + "puballen token_bot", "This command is used to send a message to all server members.")
                    .addField(config.prefix + "puben* token_bot", "This command is used to send a message to all online members of a server.")
                    .addField(config.prefix + "puballen* token_bot", "This command is used to send a message to all online server members.")
                    .setColor(config.embedColor)
                )
            })

            
            message.channel.send(new Discord.MessageEmbed()
            .setDescription(`**:white_check_mark: ${target.user.username} ${config.m_wl_sucess}** `)
            .setColor(config.embedColor))
        }
    } else {
        target = message.mentions.members.first()

        message.guild.channels.create(target.user.username, {type: "text", permissionOverwrites: [
            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: target.id,
                allow: ['VIEW_CHANNEL'],
            },
        ],}).then(channel => {
            target.roles.add(config.wlrole)
            channel.send(new Discord.MessageEmbed() 
                .setTitle(`**Welcome on your private salon, ${target.user.username}**`)
                .setDescription(`You now have your own private lounge to advertise with Asimo Sponsorbot !
                Remember that you must have one or more bot tokens to use Asimo Sponsorbot, if you don't have a token yet, contact a helper to find out more.`)
                .setColor(config.embedColor)
            )

            channel.send(new Discord.MessageEmbed() 
                .setTitle("Utilisation de Asimo Sponsorbot")
                .setDescription("__All commands use with Asimo Sponsorbot:__")
                .addField(config.prefix + "puben token_bot", "This command is used to send a message to all members of a server.")
                .addField(config.prefix + "puballen token_bot", "This command is used to send a message to all server members.")
                .addField(config.prefix + "puben* token_bot", "This command is used to send a message to all online members of a server.")
                .addField(config.prefix + "puballen* token_bot", "This command is used to send a message to all online server members.")
                .setColor(config.embedColor)
            )
            

        })

        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**:white_check_mark: ${target.user.username} ${config.m_wl_sucess}** `)
        .setColor(config.embedColor))
    }






    
    
}

module.exports.help = {
    name: "wlen"
}