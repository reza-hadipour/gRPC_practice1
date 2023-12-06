const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    id: {type: Number},
    title: {type: String},
    price: {type: String}
})

productModel.pre("save",function(next){
    const self = this;
    self.constructor.count(async function(err,data){
        if(err) return next(err)
        self.set({id: (data+1)});
        next();
    });
})


module.exports = {
    ProductModel : mongoose.model('Product',productModel)
}