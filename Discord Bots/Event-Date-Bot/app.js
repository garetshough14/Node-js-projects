// Require discord.js package
const Discord = require("discord.js");

// Create a new client using the new keyword
const client = new Discord.Client();

// array of commands
const commandsArray = ["!commands", "!event", "!author"];

// reply array
const replyArray = [
    "The owner is Garet Hough, Garet is the owner of Event Date Bot",
    "The owner is Garet Hough, Erik is the owner of Event Date Bot",
    "The owner is Garet Hough, Erik is the owner of Event Date Bot"
];

// require password from external file
const {
    token
} = require("./token.json");

// Display a message once the bot has started
client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});

// Check messages for a specific command
client.on("message", async msg =>{
    // Check for !commands
    if (msg.content === commandsArray[0]){
        // Displays all commands
        msg.reply("This bot's commands are !commands !event !author");
    }

    // Check for !author
    else if (msg.content === commandsArray[2]){
        // send back a message about the author
        msg.reply(replyArray[0] + replyArray[1] + replyArray[2]);
    }
});
// Log in the bot with the token
client.login(token);