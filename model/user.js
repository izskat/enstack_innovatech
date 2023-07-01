const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname:{
        type: String,
    },
    phone:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    storename:{
        type: String,
        required: true,
    },
    storeadd:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model ('User', userSchema);