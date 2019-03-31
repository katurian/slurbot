
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
    return
}

// Check if the bot's user was tagged in the message
if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("whore")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("whore")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("nigger")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("nigger")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("kike")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("kike")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("slut")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("slut")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("manlet")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("manlet")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("brainlet")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("brainlet")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("brainlet")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("brainlet")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("manchild")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("manchild")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("kïke")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("kïke")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("faggot")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("faggot")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\s/g, '').includes("fag")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().replace(/\./g, '').includes("fag")) {
    receivedMessage.delete(1000);
}

if (receivedMessage.content.toLowerCase().includes("n1gger")) {
    receivedMessage.delete(1000);
}

})

client.login("TOKEN");
