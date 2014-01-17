var irc = require('irc');
var config = require(__dirname+'/config.json');
var Meetup = require(__dirname+'/meetups.js');
var bot = new irc.Client(config.server, config.nickname, {
    channels: config.channels
});
var date = new Date(2013,1,5, 17, 45);
var meetup = new Meetup(date, 'Klub Mama, Preradoviceva 18 Zagreb');

bot.init = function(){
    Meetup.add(new Meetup(date,  meetup));
    bot.addListener("message", function(from, to, text, message){
        switch(text){
            case "!meetups": 
                var meetupStr = '';
                var meetups = Meetup.find();
                for(key in meetups){
                    var meetup = meetups[key];
                    bot.say(config.channels[0], meetup.date+' '+meetup.loc.loc);    
                }  
                break;
            case "!talks":
                bot.say(config.channels[0], 'No talks yet for the next meetup!'); 
            }
    });
};



module.exports = bot;
