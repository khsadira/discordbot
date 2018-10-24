module.exports = {
	name: 'kick',
	description: 'Kick an user from the server.',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) 
			return message.replay('Tu dois tag un utilisateur que tu as le droit de kick!');

		const taggedUser = message.mentions.users.first();

		message.channel.send('Tu veux kick : ' + taggedUser);
	},
};
