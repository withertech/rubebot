const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require('axios')
require('dotenv').config({path: __dirname + '/.env'})
client.on("message", async message => {
	 var prefix = "!";
	 const args = message.content.slice(prefix.length).split(/ +/);
  	 const command = args.shift().toLowerCase();
	 if (command === "send") {
	       let message2process = message.content.split(' ').splice(1).join(' ');

	 	message.channel.send(message2process);
               axios
  .post('https://discordapp.com/api/webhooks/771729790641766410/vCI5ZsibR7VXizkVlGsSVoZ_B5qt_xavhzOmqKx63KbNDYLnQqk7mWvkOFwVnTwBvTeC', {
    username: "Rube Goldberg",
    avatar_url: "https://api.timeforkids.com/wp-content/uploads/2020/04/RubeGoldberg2.jpg?w=1155&h=891",
    content: message2process
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
      }
});

client.on("ready", () => {
	client.user.setActivity("!send");

});


client.login(process.env["BOT_TOKEN"]);
