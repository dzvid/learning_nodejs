
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Starting the app
const app = express();

//Allows clients to send json data to the application
app.use(express.json());
//To allow external access to the application
app.use(cors());

//Connecting to the database
mongoose.connect('mongodb://localhost:27017/node-api', 
    { useNewUrlParser: true });
//Load the models
//another way to load models: require('./node-api/src/models/Product');
requireDir('./src/models');

//Testing if the model is working connect to the model and insert a register
// const Product = mongoose.model('Product');

// Routes
// 'use' is a wildicard to accept all kinds of requests
app.use('/api', require('./src/routes'));

//Starting the server, port to Express listen for requests
app.listen(3001);