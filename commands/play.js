module.exports = {
	name: 'play',
	description: 'Playing music.',
	execute(message, args, dispatcher, client) {
		if (args.length == 1)
		{
			if (message.member.voiceChannel)
			{
				message.member.voiceChannel.join().then(connection => {
					const broadcast = client	
						.createVoiceBroadcast()
						.playArbitraryInput(args[0]);
					console.log(args[0]);
					const dispatcher = connection.playBroadcast(broadcast);
					//dispatcher = connection.playFile(args[0]);
					message.channel.send(message.author.username + 'a lance le son suivant : ' + args[0]);
					dispatcher.on('error', e => {
						message.channel.send('Une erreur est survenue lors de l\'ecoute du son.');
						console.log(e);
					});
					dispatcher.on('end', e => {
						dispatcher = undefined;
						message.channel.send('Fin du son.');
						console.log('Fin du son');
					});
				}).catch(console.log);
			}
			else
				message.channel.send('Vous devez vous rendre dans un channel.');
		}
		else if (args.length == 0)
			message.channel.send('Vous devez rentrer au moins une musique.');
		else if (args.length > 1)
			message.channel.send('Vous ne devez rentrer que une musique.');
	}
}
