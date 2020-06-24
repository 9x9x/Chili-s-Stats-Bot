const Discord = require('discord.js');

const bot = new Discord.Client();


let prefix = 'c!';

let serverID = '724000090246742087';
let channelIDTotal = '725005202759090197';
let channelIDMembers = '725005270295511212';
let channelIDBots = '725005299198459984';
bot.on('ready',() =>{
   

    bot.user.setActivity(prefix + `help`,{type: 'WATCHING'});


    let myGuild = bot.guilds.cache.get(serverID);
    let memberCount =  myGuild.memberCount;

    
    let m = myGuild.members.cache.filter(member => !member.user.bot).size;
    let b = myGuild.members.cache.filter(member => member.user.bot).size;

    let MemberCountChannelTotal = myGuild.channels.cache.get(channelIDTotal);
    MemberCountChannelTotal.setName('All-Members: ' + myGuild.memberCount).catch(error => console.log(error));


    let MemberCountChannelMembers = myGuild.channels.cache.get(channelIDMembers);
    MemberCountChannelMembers.setName('Members: ' + m).catch(error => console.log(error));


    let MemberCountChannelBots = myGuild.channels.cache.get(channelIDBots);
    MemberCountChannelBots.setName('Bots: ' + b).catch(error => console.log(error));


    console.log(memberCount);

    setInterval(() => {
        let memberCount =  myGuild.memberCount;

    
        let m = myGuild.members.cache.filter(member => !member.user.bot).size;
        let b = myGuild.members.cache.filter(member => member.user.bot).size;

        let MemberCountChannelTotal = myGuild.channels.cache.get(channelIDTotal);
        MemberCountChannelTotal.setName('All-Members: ' + myGuild.memberCount).catch(error => console.log(error));


        let MemberCountChannelMembers = myGuild.channels.cache.get(channelIDMembers);
        MemberCountChannelMembers.setName('Members: ' + m).catch(error => console.log(error));


        let MemberCountChannelBots = myGuild.channels.cache.get(channelIDBots);
        MemberCountChannelBots.setName('Bots: ' + b).catch(error => console.log(error));


        console.log(memberCount);
    }, 600000);

 })
 
 bot.on('guildMemberAdd', member =>{
    let myGuild = bot.guilds.cache.get(serverID);
    let memberCount =  myGuild.memberCount;
    let m = myGuild.members.cache.filter(member => !member.user.bot).size;
    let b = myGuild.members.cache.filter(member => member.user.bot).size;

    let MemberCountChannelTotal = myGuild.channels.cache.get(channelIDTotal);
    MemberCountChannelTotal.setName('All-Members: ' + myGuild.memberCount).catch(error => console.log(error));


    let MemberCountChannelMembers = myGuild.channels.cache.get(channelIDMembers);
    MemberCountChannelMembers.setName('Members: ' + m).catch(error => console.log(error));


    let MemberCountChannelBots = myGuild.channels.cache.get(channelIDBots);
    MemberCountChannelBots.setName('Bots: ' + b).catch(error => console.log(error));

    console.log(memberCount);
 }) 
 
 bot.on('guildMemberRemove', member =>{
    let myGuild = bot.guilds.cache.get(serverID);
    let memberCount =  myGuild.memberCount;
    let m = myGuild.members.cache.filter(member => !member.user.bot).size;
    let b = myGuild.members.cache.filter(member => member.user.bot).size;

    let MemberCountChannelTotal = myGuild.channels.cache.get(channelIDTotal);
    MemberCountChannelTotal.setName('All-Members: ' + myGuild.memberCount).catch(error => console.log(error));


    let MemberCountChannelMembers = myGuild.channels.cache.get(channelIDMembers);
    MemberCountChannelMembers.setName('Members: ' + m).catch(error => console.log(error));


    let MemberCountChannelBots = myGuild.channels.cache.get(channelIDBots);
    MemberCountChannelBots.setName('Bots: ' + b).catch(error => console.log(error));

    console.log(memberCount);
 })

bot.on('message', (message) =>{
    const parts = message.content.split(' ');
    const command = parts.shift().toLowerCase();


    if(command === prefix + 'stats') {
        
        let guild = bot.guilds.cache.get(serverID);
            let co = guild.memberCount;
            let b = guild.members.cache.filter(member => !member.user.bot).size;
            let m = guild.members.cache.filter(member => member.user.bot).size;
            let countembed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('')
            .setAuthor("Chili's", 'https://cdn.discordapp.com/attachments/725221011603062795/725221115940831292/new_chilis.gif',       'https://discord.gg/3TgsTGB')
            .setDescription('')
            .setThumbnail('https://cdn.discordapp.com/attachments/725221011603062795/725221115940831292/new_chilis.gif')
            .addFields(
                { name: '**' + 'All Members: ' + '**', value: co },
                { name: '**' + 'Members: ' + '**', value:  b},
                { name: '**' + 'Bots: ' + '**', value: m },
            )
            .addField('**' + 'Server: ' + '**', "Chili's", )
            .setTimestamp()
            .setFooter("Chili's", '');
            message.channel.send(countembed);
        
    }

    if(command === prefix + 'help'){

        let help = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("Chili's members stats")
        .setAuthor("Chili's", 'https://cdn.discordapp.com/attachments/725221011603062795/725221115940831292/new_chilis.gif',       'https://discord.gg/3TgsTGB')
        .setDescription('Help')
        .setThumbnail('https://cdn.discordapp.com/attachments/725221011603062795/725221115940831292/new_chilis.gif')
        .addFields(
            { name: '**' + 'Commands: ' + '**', value: 'Prefix: ' + '```\nc!help: Show this help embed ```' + '\u200B' + '```\nc!stats: Show server Members Stats```' },
            { name: '**' + 'Info: ' + '**', value: '```\nEvery 10 mins the channels will update !```' }
        )
        .addField('**' + 'Server: ' + '**', "Chili's", )
        .setTimestamp()
        .setFooter("Chili's", '');
        message.channel.send(help);

        }
})

bot.login(process.env.token);