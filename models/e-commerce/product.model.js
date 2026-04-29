import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    description:{
        required:true,
        type:String,
    },
    name:{
        required:true,
        type:String,
    },
    profuctImage:{
        type:String,
    },
    price:{
        default:0,
        type:Number,
    },
    stock:{
        type:Number,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },  

},{timestamps:true});

export const Product = mongoose.model('Product',productSchema);