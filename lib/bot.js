var irc = require('irc');
var config = require(__dirname+'/config.json');
var Meetup = require(__dirname+'/meetups.js');
var bot = new irc.Client(config.server, config.nickname, {
    channels: config.channels
});
Meetup.add(new Meetup(new Date(), "MAMA"));
bot.addListener("message", function(from, to, text, message){
    switch(text){
        case "!meetups": 
                var meetupStr = '';
                var meetups = Meetup.find();
                for(key in meetups){
                    var meetup = meetups[key];
                    bot.say(config.channels[0], meetup.date+' '+meetup.location);    
                }  
            break;
    }
});


