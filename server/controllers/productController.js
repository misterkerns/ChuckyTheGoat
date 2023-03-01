const { ObjectId } = require('mongodb');
const Product = require('../models/product');


// Create Product
exports.create_product = (req, response) => {
    let myobj = {
        product_sku: req.body.product_sku,
        product_name: req.body.product_name,
        product_quantity: req.body.product_quantity
    }
    Product.create(myobj, (err, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Get All Products
exports.get_products = (req, res) => {
    Product.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    });
};

// Get Single Product
exports.get_product_byid = (req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Product.findOne(myquery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Update Single Product
exports.update_product_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        product_sku: req.body.product_sku,
        product_name: req.body.product_name,
        product_quantity: req.body.product_quantity
    };
    Product.updateOne(myquery, newvalues, (req, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Delete Single Project
exports.delete_product_byid = (req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Product.deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        response.json(obj);
    });
};

