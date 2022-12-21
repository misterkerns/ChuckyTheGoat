const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_sku: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    product_quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("Product", ProductSchema);