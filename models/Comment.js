const mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema ({
    body: {
        type: String,
        required: true
    },
    byUser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
    },
    forPost: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required: true
    }
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);