const mongoose = require('mongoose');

const TheatreSchema = new mongoose.Schema(
    {
        name:{ type: String, required: true },
        city:{ type: String },
        email:{ type: String},
        mobile:{ type: String}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Theatre', TheatreSchema);