const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema({
    item:{
        type: String,
        required: true
    },
    qty:{
        type: Number,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    info:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model ('Product', productSchema);