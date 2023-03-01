const { ObjectId } = require('mongodb');
const Task = require('../models/task');

// Create Task
exports.create_task = (req, response) => {
    let myobj = {
        content: req.body.content,
        deadline: req.body.deadline
    }
    Task.create(myobj, (err, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Gets All Tasks
exports.get_tasks = (req, res) => {
    Task.find((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    });
}; 

//Get Single Task
exports.get_task_byid = (req, res) => {
    let myquery = {_id: ObjectId(req.params.id) };
    Task.findOne(myquery, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

// Update Single Task
exports.update_task_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        content: req.body.title,
        deadline: req.body.deadline
    };
    Task.updateOne(myquery, newvalues, (req, res) => {
        if (err) throw err;
        response.json(res);
    });
};

// Delete Single Task
exports.delete_task_byid = (req, response) => {
    let myquery = { _id: ObjectId(req.params.id) };
    Task.deleteOne(myquery, (err, obj) => {
        if (err) throw err;
        response.json(obj);
    });
};