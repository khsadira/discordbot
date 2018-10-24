module.exports = {
	name: 'pause',
	description: 'Mettre en pause la musique',
	execute(message, args, dispatcher) {
		if (dispatcher !== undefined)
			dispatcher.pause();
	}
}
