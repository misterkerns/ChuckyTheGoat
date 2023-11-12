const { ObjectId } = require('mongodb');
const Zero = require('../models/zero');

//Create Zero
exports.create_zero = (req, response) => {
    let myobj = {
        sku: req.body.sku
    }
    Zero.create(myobj, (err, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Get All Zeros
exports.get_zeros = (req, res) => {
    Zero.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    });
};

// Get Single Zero
exports.get_zero_byid = (req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Zero.findOne(myquery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Update Single Zero
exports.update_zero_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        sku: req.body.sku
    };
    Zero.updateOne(myquery, newvalues, (req, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Delete Single Zero
exports.delete_zero_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Zero.deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        response.json(obj);
    });
};
