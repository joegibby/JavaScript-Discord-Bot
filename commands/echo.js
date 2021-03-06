const {Command} = require("discord-akairo");
const Discord = require("discord.js")

class EchoCommand extends Command {
	constructor() {
		super("echo", {
			aliases: ["echo", "say"],
			args: [{id: "message", type: "string", default: "You need to specify what to echo", match: "content"}],
			description: "Repeats the message back to you."
		});
	}
	exec(message, args) {
		return message.reply(args.message);
	}
}

module.exports = EchoCommand;