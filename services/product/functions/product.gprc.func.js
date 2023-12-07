const {ProductModel} = require('../model/product.model');
const mongoose = require('mongoose');

async function createProduct(call, callback){
    try {
        const {title,price} = call.request;
        await ProductModel.create({title,price});
        callback(null,{result: "created"});
    } catch (error) {
        callback(error,null);
    }
}

async function listProduct(call, callback){
    try {
        const products = await ProductModel.find();
        callback(null, {products});
    } catch (error) {
        callback(errors,null);
    }
}

async function getProduct(call, callback){
    try {
        const {id} = call.request;
        if(mongoose.isValidObjectId(id)){
            const product = await ProductModel.findOne({"_id":(id)});
            callback(null,product);
        }else{
            return callback({message: "Invalid ID"},null);
        }
        
    } catch (error) {
        callback(error,null);
    }
}

async function updateProduct(call, callback){
    try {
        const {price,title,_id} = call.request;
        if(mongoose.isValidObjectId(_id)){
            let result = await ProductModel.updateOne({_id},{title,price});
            if(result.modifiedCount > 0) return callback(null,{result: "Updated"});
            callback({message: "Update failed"},null);
        }else{
            return callback({message: "Invalid ID"},null);
        }
    } catch (error) {
        callback(error,null);
    }
}

async function deleteProduct(call, callback){
    try {
        const {id} = call.request;
        const result = await ProductModel.deleteOne({_id: id});
        if(result.deletedCount > 0) return callback(null, {result: "deleted"});
        callback({message: "Can not delete"},null);
    } catch (error) {
        callback(error,null);
    }
}

module.exports = {
    listProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
}