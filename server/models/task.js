const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);