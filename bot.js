const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
    return
}

// Check if the bot's user was tagged in the message
if (receivedMessage.content.toLowerCase().includes("whore")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().includes("nigger")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().includes("kike")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().includes("slut")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().includes("manlet")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().includes("brainlet")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().includes("cunt")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().includes("manchild")) {
    receivedMessage.delete(1000);
}

})

client.login("TOKEN");
