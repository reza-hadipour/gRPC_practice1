const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const productProtoPath = path.join(__dirname,"..","..","protos","product.proto");
console.log(productProtoPath);
const productProto = protoLoader.loadSync(productProtoPath);
const {productPackage} = grpc.loadPackageDefinition(productProto);
const productServiceURL = "127.0.0.1:4001";

const productClient = new productPackage.ProductService(productServiceURL,grpc.credentials.createInsecure());

async function createProduct(req,res,next){
    const {title,price} = req.query;
    const result = productClient.createProduct({title,price},(err,result)=>{
        if(err) return res.json(err);
        res.json(result);
    })
}

async function listProduct(req,res,next){
    productClient.listProduct(null,(err,data)=>{
        if(err) return res.json(data);
        res.json(data);
    })
}

async function getProduct(req,res,next){
    const {id} = req.params;
    productClient.getProduct({id},(err,product)=>{
        if(err) return res.json(err);
        res.json(product)
    })
}
async function updateProduct(req,res,next){
    const {title,price} = req.query;
    const {id: _id} = req.params;
    productClient.updateProduct({title,price,_id},(err,result)=>{
        if(err) return res.json(err);
        res.json(result);
    })
}

async function deleteProduct(req,res,next){
    const {id} = req.params;
    productClient.deleteProduct({id},(err,result)=>{
        if(err) return res.json(err);
        res.json(result);
    })
}


module.exports = {
    listProduct,
    getProduct,
    deleteProduct,
    updateProduct,
    createProduct
}