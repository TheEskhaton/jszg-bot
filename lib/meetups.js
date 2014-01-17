var Meetup = function(date, loc){
    this.date = date;
    this.loc = loc;
};
var meetups = [];
Meetup.find = function(){
    return meetups;
}
Meetup.add = function(meetup){
    meetups.push(meetup);
};
module.exports = Meetup;
