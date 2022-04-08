const mongoose = require('mongoose');

const { Schema } = mongoose;

const playerSchema = new Schema({
    uuid: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    rarity: {
        type: String,
        required: true,
        trim: true
    },
    team: {
        type: String,
    },
    team_short_name: {
        type: String
    },
    ovr: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bat_hand: {
        type: String,
    },
    throw_hand: {
        type: String
    },
    is_hitter: {
        type: Boolean
    },
    imgLink: {
        type: String,
    },
    position: {
        type: String
    },
    secondary_positions: {
        type: String
    }

})

const Player = mongoose.model('Player', playerSchema)

module.exports=Player