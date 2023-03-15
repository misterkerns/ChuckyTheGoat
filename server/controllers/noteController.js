const { ObjectId } = require('mongodb');
const Note = require('../models/note');

// Create Note
exports.create_note = (req, response) => {
    let myobj = {
        title: req.body.title,
        content: req.body.content
    }
    Note.create(myobj, (err, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Get All Notes
exports.get_notes = (req, res) => {
    Note.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    });
};

// Get Single Note
exports.get_note_byid = (req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Note.findOne(myquery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Update Single Note
exports.update_note_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        title: req.body.title,
        content: req.body.content
    };
    Note.updateOne(myquery, newvalues, (req, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Delete Single Note
exports.delete_note_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Note.deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        response.json(obj);
    });
};