//Creating our first model (our first model)
//1. Create our schema for the product: fields and respectives types
const mongoose = require('mongoose');

//2. Pass the fields to be saved for a each product
const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// 3. Register the model to be used by the application
mongoose.model('Product', ProductSchema);