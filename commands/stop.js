module.exports = {
	name: 'stop',
	description: 'Arrete la musique en cours.',
	execute(message, args, dispatcher) {
		if (dispatcher === undefined)
			dispatcher.stop();
	}
}
