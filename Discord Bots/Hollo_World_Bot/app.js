// id: 861164976890183700
// invitation link: https://discord.com/api/oauth2/authorize?client_id=861164976890183700&scope=bot&permissions=1

// require the discord.js files/modules/functions
const Discord = require("discord.js");

// create a new application
var client = new Discord.Client();

// require the token from the token.json file
const {
    token
} = require("./token.json")

//Ready Event
client.on("ready", () => {
    console.log("This bot is now online: " + client.user.tag);
});

//message event
client.on("message", message => {
    // the user input as lowercase
    var message_LC = message.content.toLowerCase();

    // if the user input is hello
    if (message_LC == "!hello"){
        // reply to that user
        message.reply("Hey How is it going!");
    }
    
    // console.log(message);
});

// login the application (the bot)
client.login(token);

