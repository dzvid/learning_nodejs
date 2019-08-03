const express = require('express');

const routes = express.Router('');

const ProductController = require('./controllers/ProductController')

// Creating our first route
//req: It represents the request to the server from a host
// (include parameteres, headers, ip, user authorization, etc)
//res: It represents the response to a host
routes.get('/products', ProductController.index);

module.exports = routes;