const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true,
    },
    qty:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }
});

const checkoutSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    phone:{
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
    interval:{
        type: String,
        required: true,
    },
    additional:{
        type: String,
        required: true,
    },
    cart: [cartSchema]
});

module.exports = mongoose.model ('Checkout', checkoutSchema);