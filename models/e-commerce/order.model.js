import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    quantity:{
        type:Number,
        required:true,
    },
});

const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    orderItems:{
        trype:[orderSchema],
        required:true,
    },
},{timestamps:true});

export const Order = mongoose.model('Order',orderSchema);