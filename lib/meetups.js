var Meetup = function(date, location){
    this.date = date;
    this.location = location;
};
var meetups = [];
Meetup.find = function(){
    return meetups;
}
Meetup.add = function(meetup){
    meetups.push(meetup);
}
module.exports = Meetup;
