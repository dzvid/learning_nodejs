
const express = require('express');
const mongoose = require('mongoose');

//Starting the app
const app = express();

//Starting database
mongoose.connect('mongodb://localhost:27017/node-api', { useNewUrlParser: true });



// Creating our first route
//req: It represents the request to the server from a host
// (include parameteres, headers, ip, user authorization, etc)
//res: It represents the response to a host
app.get('/', (req, res) => {
    res.send('Hello Rocketseat!');
});

//port to listen
app.listen(3001);