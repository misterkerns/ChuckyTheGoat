const express = require('express');
const api = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors');
api.use(cors());
const path = require('path');

require('dotenv').config({ path: './config.env' });

const port = process.env.port || 5000;

const mongoDB = process.env.ATLAS_URI;
mongoose.connect(
    mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log('connected to mongodb'))
.catch((err) => console.log(err));

api.use(express.static(path.resolve(__dirname, "./client/build")));
api.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });