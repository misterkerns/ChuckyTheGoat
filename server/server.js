const express = require('express');
const api = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

api.use(cors());

api.use(express.json());
api.use(productRoutes);

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

api.listen(port, () => {
    console.log(`server running: ${port}`)
})