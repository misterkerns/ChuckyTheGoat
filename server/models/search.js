const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    query: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Search', SearchSchema);