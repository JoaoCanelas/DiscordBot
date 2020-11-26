module.exports = {
	name: 'licano',
	description: 'pelicanos',
	execute(message, args) {
        message.channel.send({files: ["pelicano.jpg"]});
    },
};