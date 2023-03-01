const { ObjectId } = require('mongodb');
const Article = require('../models/article');

// Create Article
exports.create_article = (req, response) => {
    let myobj = {
        title: req.body.title,
        content: req.body.content
    }
    Article.create(myobj, (err, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Get All Articles
exports.get_articles = (req, res) => {
    Article.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    });
};

// Get Single Article
exports.get_article_byid = (req, res) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Article.findOne(myquery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Update Single Article
exports.update_article_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        title: req.body.title,
        content: req.body.content
    };
    Article.updateOne(myquery, newvalues, (req, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Delete Single Article
exports.delete_article_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Article.deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        response.json(obj);
    });
};