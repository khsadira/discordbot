module.exports = {
	name: 'user-info',
	description: 'Display info about yourself.',
	execute(message, args) {
		message.channel.send('Ton usernames est : ' + message.author.username + '.\nTon id est : ' + message.author.id + '.');
	},
};
