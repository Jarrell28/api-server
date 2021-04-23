'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const logger = require('./middleware/logger.js');
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

const notFound = require('./errors/404.js');
const errors = require('./errors/500.js');

const MONGODB_URI = 'mongodb://localhost:27017/testDB'; //if db-name exists it will connect you, if it doesn't it will create the database

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MONGODB_URI, options).then(response => console.log(mongoose.connection.readyState));


app.use(express.json());

app.use(logger);
app.use(userRoutes);
app.use(productRoutes);

app.use('*', notFound);
app.use(errors);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => {
            console.log('App started');
        })
    }
}