//This controller deals with the requests and models
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //index return a list of all the indexes of the products on the database
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },

    async store(req, res){
        //Code to create a new register (new product)
        const product = await Product.create(req.body);

        //returns the product that was created and inserted in the database
        return res.json(product);
    }

};