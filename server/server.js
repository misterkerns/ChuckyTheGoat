const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config({ path: './config.env' });
const port = process.env.port || 8080;

const noteRoutes = require('./routes/noteRoutes');
const productRoutes = require('./routes/productRoutes');
const taskRoutes = require('./routes/taskRoutes');
const searchRoutes = require('./routes/searchRoutes');
const zeroRoutes = require('./routes/zeroRoutes');

app.use(cors());
app.use(express.json());

app.use('/notes', noteRoutes);
app.use('/products', productRoutes);
app.use('/tasks', taskRoutes);
app.use('/searches', searchRoutes);
app.use('/zeros', zeroRoutes);

const mongoDB = process.env.ATLAS_URI;
mongoose.connect(
    mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log('connected to mongodb'))
.catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`server running: ${port}`)
})
