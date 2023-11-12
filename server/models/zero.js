const mongoose = require('mongoose');

const ZeroSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Zero", ZeroSchema);