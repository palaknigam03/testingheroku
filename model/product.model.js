const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: true,
        trim: true
    },

    productImageUrl:{
        type: String,
        required: true,
        trim: true
    },
    
    productQty:{
        type: Number,
        required: true,
        min: 1
    },

    productDescription:{
        type: String,
        required: true,
        trim: true
    },

    productDiscount:{
        type: String,
        default: 0
    },
    productPrice:{
        type: Number,
        required: true,
        min: 1
    },
   
    
    categoryId: Schema.Types.ObjectId  
});
module.exports = mongoose.model("products",productSchema);