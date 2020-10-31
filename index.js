                                                                            const ftp = require("basic-ftp")
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs')
const axios = require('axios')
const ftp = require("basic-ftp")
require('dotenv').config({path: __dirname + '/.env'})
client.on("message", async message => {
         var prefix = "!";
         const args = message.content.slice(prefix.length).split(/ +/);
         const command = args.shift().toLowerCase();
         if (command === "send") {
               let message2process = message.content.split(' ').splice(1).join(' ');

                message.channel.send("Starting Machine");
                fs.writeFile('./message.txt', message2process, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
            const ftpclient = new ftp.Client()
         try {
        await ftpclient.access({
            host: "localhost",
            user: "root",
            password: "toor",
            secure: false
        });
        await ftpclient.uploadFrom("message.txt", "message.txt");
            console.log(await ftpclient.list());


    } catch(err) {
        message.channel.send("```" + err + "```");      
message.channel.send("the inator blew up");
}
        }

}); 
client.on("ready", () => {
        client.user.setActivity("!send");

});


client.login(process.env["BOT_TOKEN"]);
