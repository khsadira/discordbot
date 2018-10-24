'use strict';
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on('ready', () => {
	console.log('Ready!');
	console.log(client.user.name + ' starting.');
	console.log('Serving ' + client.guilds.size + ' servers.');
});


client.login(token);

var dispatcher = undefined;
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles)
{
	const command = require('./commands/' + file);
	client.commands.set(command.name, command);
}

client.on('message', message => {
	if (!(message.content.startsWith(prefix)) || message.author.bot)
		return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName))
		return ;

	const command = client.commands.get(commandName);
	if (command.args && !args.length)
	{
		let reply = 'Tu n\'as pas donne d\'argument, ' + message.author;

		if (command.usage)
			reply += '\nLa bonne utilisation est : \''+ prefix + command.name + ' ' + command.usage + '\'';
		return message.channel.send(reply);
	}
	else if (message.channel.type !== 'text')
		return message.reply('Je ne peux executer cette commande dans mes DM !');

	try {
		command.execute(message, args, dispatcher, client);
	}
	catch (error)
	{
		console.error(error);
		message.reply('Il y a une erreur d\'execution de cette commande.');
	}
});

client.on('guildMemberAdd', member => {
	member.createDM().then(channel => {
		return channel.send('Bienvenue sur mon serveur ' + member.displayName);
	}).catch(console.error)
});
