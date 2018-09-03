const Discord = require('discord.js');
let botconfig = require(`../botconfig.json`)

exports.run = (client, message, args) => {
if (!message.content.startsWith(botconfig.prefix)) return;
  
  if (args.join(" ") == "") {
        message.reply("you need mention a user for this command! Syntax: !avatar @USER");
        return;
    } else {
        let user = message.mentions.users.first(); // Mentioned user
        let image = user.displayAvatarURL; // Get image URL
        let embed = new Discord.RichEmbed()
            .setColor("#0000000") // Set color (If you don't have ideas or preference, use RANDOM for random colors)
            .setImage(image) // Set image in embed
        message.channel.send(embed); // Send embed
    }
}
module.exports.help = {
 name: "avatar" 
}