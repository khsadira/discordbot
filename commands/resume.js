module.exports = {
	name: 'resume',
	description: 'Reprends le son en pause.',
	execute(message, args, dispatcher) {
		if (dispatcher !== undefined)
			dispatcher.resume();
	}
}
