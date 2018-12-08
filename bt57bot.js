const Discord = require('discord.js');
const client = new Discord.Client();
 
client.login(process.env.token);
 
client.on('message', message => {
 


    if(message.content.toLowerCase() === 'hello')
        message.channel.send("Hey there! " + message.author );
    
        
        else if (message.content.toLowerCase() === 'hey')
        message.channel.send("Hello there! " + message.author );

        else if (message.content.toLowerCase() === 'hi')
        message.channel.send("Hi! " + message.author );

        else if (message.content.toLowerCase() === '/invite')
        message.channel.send("Server invite link: https://discord.gg/c7neDCQ");

        else if (message.content.toLowerCase().includes("/help!"))    
        {
         message.channel.send("Please wait, an <@&375740807979728897> has been notified.")
        
        }


        else if (message.content.toLowerCase() === 'ping!')
        message.channel.send("Pong!");
        
        else if (message.content.toLowerCase().includes('*whos a good boy*'))
        {
            message.channel.send("^w^");
    
        }


        else if(message.content.toLowerCase().includes('cztime?'))
        {
            var date = new Date();
            message.channel.send('The CZ time is ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
        }
      
        

     else if(message.content == 'verify')
     {
         message.channel.send(message.author + " Your account has been successfully verified!") 
         let memberRole = message.member.guild.roles.find("name", "verified"); 
         message.member.addRole(memberRole)
     }
        
     else if(message.content == 'Verify')
     {
         message.channel.send(message.author + " Your account has been successfully verified!") 
         let memberRole = message.member.guild.roles.find("name", "verified"); 
         message.member.addRole(memberRole)
     }

     else if(message.content == 'VERIFY')
     {
         message.channel.send(message.author + " Your account has been successfully verified!") 
         let memberRole = message.member.guild.roles.find("name", "verified"); 
         message.member.addRole(memberRole)
     }

     else if(message.content == '/rights')
     {
         var rights = new Discord.RichEmbed()
         .setAuthor("BT", "https://cdn.discordapp.com/attachments/375743269688049665/520699628111527951/BT-57_logo_8.jpg")
         .addField("The owner", "***This server is owned by*** ***Jakub Adam Olbert***")
         .setThumbnail("https://cdn.discordapp.com/attachments/375743269688049665/520705141415084064/Foxi57-prf10efx_invis.png")
         message.channel.sendEmbed(rights)
     }     


     
     else if(message.content == '/rules')
     {
        var rules = new Discord.RichEmbed()
        .setAuthor("BT", "https://cdn.discordapp.com/attachments/375743269688049665/520699628111527951/BT-57_logo_8.jpg")
        .addField("The rules:", "We want a friendly community. When it comes to our rules its fairly straightforward, you can avoid trouble simply by using common sense, but if you want us to be more specific then please do not insult or attack others, dont spam, and do not post dangerous links leading to viruses etc. Also we as a group value our privacy and the privacy of others. Please do not post any personal information such as photos or names etc without the persons approval and anything that may offend others belongs to the #nsfw channel - you can go all wild there! (*Psst! The rules are also posted in the <#375726228260388865> channel! ;3* )")
        .setFooter("Have fun!")
    
        message.channel.send("Here you go " + message.author) + message.channel.sendEmbed(rules);

     }



});
