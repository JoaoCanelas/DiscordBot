
//https://discord.com/oauth2/authorize?client_id=746408007444725800&scope=bot


const Discord = require('discord.js')
//const config = require('./config.json');
const { prefix, token } = require('./config.json');
const client = new Discord.Client()

client.once('ready', () => {
    console.log("Ready...")
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        activity: {
            name: "Bartman loving Yoda",  //The message shown
            type: "WATCHING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    })

    
})




//Listening to messages
//Replying
client.on('message', message => {

    if ( message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    var msg= message.content.toLowerCase();


    //console.log(message.content)


    if (msg === `doner`) //done
    {
        message.channel.send('Kebab');
    } 
    
    else if (msg === "yoko")//done
    {
        message.channel.send("Thanks Velo Bot for the information. Let me add that he is also a big fucking queer.");
    }

    else if (msg.startsWith("pinky"))//done
    {
        message.channel.send("Hi baby....");
    }

    else if ( (msg === "aa:p") || (msg === "aa :p") ) //done
    {
        message.channel.send("AA :p");
    }

    else if (msg.startsWith("uf")) //discarded
    {

        message.reply(" you're not Bartman!");
    }

    else if (msg === "gonza")//done
    {
        message.channel.send({files: ["https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-shrek-eddie-murphy.jpg"]});
    }

    else if (msg === "licano") //done
    {
        message.channel.send({files: ["pelicano.jpg"]});
    }

    else if (msg === "gui")//done
    {
        message.channel.send("Fake brazilian and fake portuguese");
    }

    else if ( (msg === "ikzelf") || (msg === "ikke") || (msg === "ikz") )//done
    {
        message.channel.send("Misses his bro Nanobob :(");
    }

    else if (msg === "skinner") //done
    {
        message.channel.send("is a fake elk");
    }




});


client.login(token)