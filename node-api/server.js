
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Starting the app
const app = express();

//Starting database
mongoose.connect('mongodb://localhost:27017/node-api', 
    { useNewUrlParser: true });
//Load the models
//require('./node-api/src/models/Product');
requireDir('./src/models');
    //Testing if the model is working connect to the model and insert a register
const Product = mongoose.model('Product');


// Creating our first route
//req: It represents the request to the server from a host
// (include parameteres, headers, ip, user authorization, etc)
//res: It represents the response to a host
app.get('/', (req, res) => {
    //Testing if the model is working
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });

    return res.send('Hello Rocketseat!');
});

//port to express listen for requests
app.listen(3001);