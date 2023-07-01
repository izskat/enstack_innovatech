const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    phone:{
        type: String,
        required: true,
    },
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

module.exports = mongoose.model ('Cart', cartSchema);