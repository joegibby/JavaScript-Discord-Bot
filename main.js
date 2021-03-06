const { AkairoClient } = require("discord-akairo");
const Discord = require("discord.js");
const config = require("./commands/config.js");

var token, prefix;
try {
	token = require("./token.json").key;
	console.log("Starting using locally stored value for token.");
	prefix = config.test_prefix;
}
catch(error) {
	token = process.env.TOKEN;
	console.log("Starting using token stored on Heroku");
	prefix = config.main_prefix;
}

const client = new AkairoClient(
	{
	    ownerID: config.owner_id,
	    prefix: prefix,
	    commandDirectory: "./commands/",
	    listenerDirectory: "./listeners/",
	    allowMention: true
	}, {
		disableEveryone: true
	}
);

client.login(token);