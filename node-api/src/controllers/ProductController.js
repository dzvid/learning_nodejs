//This controller deals with the requests and models
const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //index return a list of all the indexes of the products on the database
    async index(req, res){
        //body is to get content from request body
        //params is to get id parameters defined on the route
        //query is for access the GET parameters
        const { page = 1 } = req.query;
        const products = await Product.paginate( { }, { page, limit: 10 });

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