const { Schema, model } = require('mongoose');
const { Artist } = require('./Artist')
const dateFormat = require('../utils/dateFormat');

const artSchema = new Schema({
    artist: [Artist],
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    year: {
        type: Date,
    },
    description: {
        type: String,
        required: 'You need to enter a description!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,
    },
    size: {
        type: String,
        required: false, 
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
})

module.exports = artSchema;