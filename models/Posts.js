const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var PostSchema = new mongoose.Schema({
    slug: {
        type: String,
        lowercase: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true
    },
    moderatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    club: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Club'
    },
    postImage: [{
        type: String,
    }],
    contact: [{
        type: String
    }],
    tagsList: [{
        type: String,
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    isModerated: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

PostSchema.plugin(uniqueValidator, {message: 'is already taken'});

mongoose.model('Post', PostSchema);