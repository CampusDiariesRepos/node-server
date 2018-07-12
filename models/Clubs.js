const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var ClubsSchema = new mongoose.Schema({
    slug: {
        type: String,
        lowercase: true,
        unique: true
    },
    name: {
        type: String, 
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: false
    },
    clubHead: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true
    },
    clubMembers: [{
        type: mongoose.Schema.Types.ObjectId
    }]
}, {timestamps: true});

ClubsSchema.plugin(uniqueValidator, {message: 'is already taken'});

mongoose.model('Club', ClubsSchema);