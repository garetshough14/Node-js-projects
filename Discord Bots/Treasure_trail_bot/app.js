// ID: 861183124577583124
// Invite Link: https://discord.com/api/oauth2/authorize?client_id=861183124577583124&scope=bot&permissions=1

// access the discord.js files
const Discord = require("discord.js");

// create a new application
var client = new Discord.Client();

// require password from external file
const {
    token
} = require("./token.json");

// ready event
client.on("ready", () =>{
    console.log("This bot is online: " + client.user.tag )
});

//message event
client.on("message", message =>{
    // user input to lower case
    const inputToLowerCase = message.content.toLowerCase();

    // random reward command
    if (inputToLowerCase.includes("!randomreward") && message.author.bot == false){
        
        var decoded_message = inputToLowerCase.split(" ");

        var correct_number = Number(decoded_message[1]);

        var floored_number = Math.floor(correct_number);

        if (Number(floored_number)){
            console.log("true");
        }
        else {
            console.log("false");
        }
    }

    // help command
    else if (inputToLowerCase == "!help"){
        message.reply("theres only one command, !randomreward")
    }
});


// login function
client.login(token);