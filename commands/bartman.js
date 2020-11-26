module.exports = {
	name: 'bartman',
	description: 'bart ',
	execute(message, args) {
        message.channel.send({files: ["bart.jpeg"]});

	},
};