//This controller deals with the requests and models
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //index return a list of all the indexes of the products on the database
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },

};