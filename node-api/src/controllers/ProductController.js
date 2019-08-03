//This controller deals with the requests and models
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //index return a list of all the indexes of the products on the database
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },

    //Create a new register (new product, Create - CRUD)
    async store(req, res){
        const product = await Product.create(req.body);

        //returns the product that was created and inserted in the database
        return res.json(product);
    },
    //Show a product details (Read - CRUD)
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    //Update a product info (U - CRUD)
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        return res.json(product);
    },
    //Deletes a product (D - CRUD)
    async destroy(req, res){

        await Product.findByIdAndRemove(req.params.id);

        //Return a success message (with no cotent)
        return res.send();
    }
};