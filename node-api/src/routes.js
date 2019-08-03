const express = require('express');

const routes = express.Router('');

const ProductController = require('./controllers/ProductController')

// Creating our first route
//req: It represents the request to the server from a host
// (include parameteres, headers, ip, user authorization, etc)
//res: It represents the response to a host
    //Get all indexes 
routes.get('/products', ProductController.index);
    //Get a product details
routes.get('/products/:id', ProductController.show);
    //Create a new product
routes.post('/products', ProductController.store);
    //Updates a product info
routes.put('/products/:id', ProductController.update);
    //Delete a product
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;