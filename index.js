const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: false});
const token = '';
const prefix = "sb!";

bot.on('ready', () => {
    console.log('This bot is online!');
})

bot.on('ready', () => {
    bot.user.setActivity("as Jinhao's pet"); 
});

bot.on('message', msg => {
    if (msg.content == "guys" || msg.content == "Guys" || msg.content == "GUYS") {
        msg.reply("Not all of us are guys here. How about using 'everyone' instead?");
    }
})

bot.on('message', msg => {
    if (msg.content == "compliment") {
        var compliments = ["you are doing amazing! :smile:", "you are beautiful :smile:", "you’re that “Nothing” when people ask me what I’m thinking about :smile:", "you look great today :smile:", "I bet you make babies smile", "I like your style :smile:", "our system of inside jokes is so advanced that only you and I get it. And I like that :smile:", "you should be proud of yourself :smile:", "is that your picture next to “charming” in the dictionary? :smile:", "on a scale from 1 to 10, you’re an 11 :smile:", "you’re even more beautiful on the inside than you are on the outside :smile:", "you’re like sunshine on a rainy day :smile:", "everything would be better if more people were like you! :smile:", "you’re better than a triple-scoop ice cream cone. With sprinkles.", "if you were a box of crayons, you’d be the giant name-brand one with the built-in sharpener :smile", "you should be thanked more often. So thank you!! :smile:", "our community is better because you're in it! :smile:", "you’re more fun than bubble wrap :smile:"];
        var complimentNum = Math.floor((Math.random() * (compliments.length)) + 1);
        msg.reply(compliments[complimentNum]);
    }
})

bot.on('message', message => {

    if (message.content == "rules1") {
        const rulesEmbed = new Discord.MessageEmbed()
        rulesEmbed.setImage("https://imgur.com/IuX2UzQ.png")
        rulesEmbed.setColor(0xAD1BD1)
        message.channel.send(rulesEmbed);
    }
})

bot.on('message', message => {
    if (message.content == "rules2") {
        const rulesEmbed2 = new Discord.MessageEmbed()
        rulesEmbed2.setColor(0xAD1BD1)
        rulesEmbed2.setDescription(`:one: **__Respect__ other users and their opinions ** *Basic respect is expected from everyone. Just be nice*   :slight_smile: 
                                   :two: **No __spamming, disruptive chat, or illegal topics__ of any kind** *This includes nicknames, text, links, EXCESSIVE CAPS. Failure to comply will result in a mute or kick*  :envelope_with_arrow:
                                   :three: **__Zero tolerance __for__  racism, homophobia, bullying__ and any other form of harassment** *__ANY__ form of harassment will result in a kick and or ban* :woman_gesturing_no:
                                   :four: **Listen to Stackd Staff** *Listen and do as the staff say, and all will be well*  :woman_bowing:
                                   :five: **Keep it PG** *No NSFW content (pornographic images, nudity, gore, etc.)*  :underage:
                                   :six: **English only please** *For moderation purposes, please refrain from speaking in languages other than English*  :speech_balloon:
                                   :seven: **Swearing will be permitted, but absolutely no racial, homophobic, or sexist slurs** *Swearing is fine, as long as there's no malicious intent*  :face_with_symbols_over_mouth:
                                   :warning: **Violators will be given a warning first, second time will be a kick, and repeat offenders may receive a ban. Staff here have the final verdict in anything and everything. Don't worry, they will be reasonable. Don't be an ass and have some human decency, and all will be magnificent** :smile:`)
        rulesEmbed2.setFooter("Stackd Gaming © Rules ~ Made with love by Jinhao", "https://imgur.com/NP7ovJf.png") 
        rulesEmbed2.setTimestamp()
        message.channel.send(rulesEmbed2);
    }

})

bot.on('message', message =>{
    if (message.content == "rules3") {
        message.channel.send("https://giphy.com/gifs/cute-cats-kawaii-KztT2c4u8mYYUiMKdJ")
    }
})

bot.on('message', message =>{
    if (message.content == "welcome1") {
        const welcomeEmbed1 = new Discord.MessageEmbed()
        welcomeEmbed1.setImage("https://imgur.com/WHmOAeR.png")
        welcomeEmbed1.setColor(0xAD1BD1)
        message.channel.send(welcomeEmbed1);
    }
})

bot.on('message', message =>{
    if (message.content == "welcome2") {
        const welcomeEmbed2 = new Discord.MessageEmbed()
        welcomeEmbed2.setColor(0xAD1BD1)
        welcomeEmbed2.setDescription(`**Hey everyone, welcome to the Stackd discord! Thanks for signing up for the SuperStackd League of Legends tournament. We are excited to have all of you join us on Friday, March 20!
                                       Stay tuned for more updates on discord and our social Stackd.gg media. Also, remember to check the emails that you signed up for the event with. Emails will be sent shortly with important details and confirmations!** ***__#leveltheplayingfield__***
                                       
                                       **Please ensure you read over our rules in the #rules channel too!**
                                       **Rules channel can be found here:** *<https://discord.gg/tsCZGzc>*
                                       
                                       **Important links:**
                                       **Beam:** *<https://gamers.beam.gg/event/SuperStackd-9853736>*
                                       **Website:** *<https://stackd.gg>*
                                       **Instagram:** *<https://www.instagram.com/stackd.gg/>*
                                       **Facebook:** *<https://www.facebook.com/stackd.gg/>*
                                       **Twitter:** *<https://twitter.com/GgStackd>*
                                       **Twitch:** *<https://www.twitch.tv/Stackd_gg>* 
                                    `)
        welcomeEmbed2.setFooter("Stackd Gaming © Welcome ~ Made with love by Jinhao", "https://imgur.com/NP7ovJf.png") 
        welcomeEmbed2.setTimestamp() 
        message.channel.send(welcomeEmbed2);
    }
})

bot.on('message', message =>{
    if (message.content.startsWith(prefix + "welcome3")) {
        message.channel.send("https://giphy.com/gifs/ifc-ifc-FQyQEYd0KlYQ")
        message.react(':thumbsup:')
    }
})

bot.on('message', message =>{
    if (message.content == "nidhogg") {
        const nidhoggEmbed = new Discord.MessageEmbed()
        nidhoggEmbed.setColor(0xAD1BD1)
        nidhoggEmbed.setDescription(`**Hey everyone, King Nidhogg, a Toronto-based content creator with roughly __43.1k followers on Twitch__ and __37.3k subscribers on Youtube__ is a confirmed __gaming celebrity at SuperStackd__! He is a challenger player and is currently ranked __#43 in North America__! He’ll be running the skills workshop and giving the attendees tips. Make sure to attend the skills workshop and meet him!! :sunglasses:**`)
        nidhoggEmbed.setFooter("Stackd Gaming © Announcements ~ Made with love by Jinhao", "https://imgur.com/NP7ovJf.png") 
        nidhoggEmbed.setTimestamp() 
        message.channel.send("@everyone");
        message.channel.send(nidhoggEmbed);
    }
})

//!sbsuggestion
bot.on('message', suggestion => {
    if (suggestion.content.startsWith(prefix + "suggest")) {
        const args = suggestion.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        const suggestionEmbed = new Discord.MessageEmbed()
        suggestionEmbed.setTitle("Suggestion from " + suggestion.author.username)
        suggestionEmbed.setAuthor(suggestion.author.username, suggestion.author.displayAvatarURL())
        suggestionEmbed.setDescription(" " + args)
        suggestionEmbed.setFooter("Stackd Gaming © Suggestions ~ Made with love by Jinhao", "https://imgur.com/NP7ovJf.png")
        suggestionEmbed.setTimestamp()
        suggestionEmbed.setColor(0xAD1BD1);
        suggestion.delete().catch()
        suggestion.channel.send(suggestionEmbed);
    }
})

bot.on('message', dm =>{
    if (dm.content.startsWith(prefix + "dm")) {
        dm.author.send(dm.content.slice(prefix.length).trim().split(/ +/));
    }
})

bot.login(token);
