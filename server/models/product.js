const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Product", ProductSchema);