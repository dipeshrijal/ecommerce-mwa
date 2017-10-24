"use strict";
var mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name   : String,
    badge  : Number,
    dob    : {type: Date, default: Date.now},
    isloved: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;