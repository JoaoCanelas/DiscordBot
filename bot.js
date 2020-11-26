const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('ready', () => {
    console.log('Ready!');
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        activity: {
            name: "Bartman loving Yoda",  //The message shown
            type: "WATCHING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    })

   // message.channel.send("Hello everyone, my master has given me life once again. If you don't know me or don't know what to do, just say my name and ask for help! ;)");

});



client.on('message', message => {
	if ( message.author.bot) return;

	const args = message.content.slice().trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (args.length > 2) {return;}
    
    
    var temp = message.content.toLowerCase()

    if ( (temp === "lua help pls") || (temp === "lua pls help") || (temp == "lua help") || (temp === "help lua") || (temp === "lua help me") || (temp === "lua pls help me") || (temp === "pls help me lua") || (temp === "help me lua") ){
        return message.channel.send("I have commands for {Ikzelf(Ikke, Ikz), Licano, Gui, Skinner, Yoko, Illusion, turks, jumbo,  Pinky, AA:p or AA :p, uf(fff....), Gonza and of course Doner}. I'm not case sensitive :) . ")
    }

    else if (temp === "welcome lua"){
        return message.channel.send("hallo, finally my master has given me life, again. If you don't know me or don't know what to do, just say my name and ask for help! ;) ")

    }

    else if (command.startsWith("pinky")){
        client.commands.get("pinky").execute(message,args);
        return;
    }

    else if ( (temp === "aa :p") || (temp === "aa:p") ){
        client.commands.get("aa").execute(message,args);
        return;
    }
    

    else if ( (temp === "ikke") || (temp === "ikz")){
        client.commands.get("ikzelf").execute(message,args);
        return;
    }


    else if ( (temp === "bart") || (temp === "barty")){
        client.commands.get("bartman").execute(message,args);
        return;
    }

    else if ( (temp === "turks") || (temp === "turk") || (temp == "jumbo") || (temp == "jk")){
        client.commands.get("turks").execute(message,args);
        return;
    }

    else if ( (temp === "illu") || (temp === "illusionist") ){
        client.commands.get("illusion").execute(message,args);
        return;
    }

	if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

/* client.once('disconnect', () => {
    console.log('Shutting down...');
    
    //message.channel.send("Mr. Canelas... I don't feel so good...\nSee you later mens!");

}); */

client.login(token);