const { ObjectId } = require('mongodb');
const Search = require('../models/search');

// Create Search
exports.create_search = (req, response) => {
    let myobj = {
        query: req.body.query
    }
    Search.create(myobj, (err, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Get All Searches
exports.get_searches = (req, res) => {
    Search.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    });
};

// Get Single Search
exports.get_search_byid = (req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Search.findOne(myquery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Update Single Search
exports.update_search_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        query: req.body.query
    };
    Search.updateOne(myquery, newvalues, (req, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Delete Single Search
exports.delete_search_byid = (req, response) => {
    let myquery = {_id: ObjectId(req.params.id) };
    Search.deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        response.json(obj);
    });
};