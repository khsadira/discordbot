module.exports = {
	name: 'server',
	description: 'Server!',
	execute(message, args) {
		message.channel.send('Le nom du serveur : ' + message.guild.name + '.\nNombre de membre : ' + message.guild.memberCount + '.');
	},
};
