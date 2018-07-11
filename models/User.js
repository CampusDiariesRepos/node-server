const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        lowercase: true,
        unique: true,
        required: true,
        match: [/^[a-zA-Z0-9.]+$/, 'is invalid']
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        match: [/\S+@\S+\.\S+/,
                'is invalid'],
    },
    rollnumber: {
        type: Number,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    activationKey: {
        type: String,
        default: null
    },
    passwordResetKey: {
        type: String,
        default: null
    },
    activated: {
        type: Boolean,
        default: false
    },
    is_moderator: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

UserSchema.plugin(uniqueValidator, {message: 'is already taken'});

mongoose.model('User', UserSchema);