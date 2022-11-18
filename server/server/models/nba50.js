let mongoose = require('mongoose');
//create nba 50 point games model

let nbaModel = mongoose.Schema({
    name: String,
    Points: String,
    date: String,
    team: String,
    against: String
    },
    {
        collection: "nba50"
    }

);

module.exports = mongoose.model('nba',nbaModel);
