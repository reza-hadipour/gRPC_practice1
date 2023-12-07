const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    title: {type: String},
    price: {type: String}
})

// let counter = 0

// productModel.pre("save",function(next){
    // const self = this;
    // self.$inc("id",counter);
    // self.id = counter++;
    // console.log(counter);
    // next();


    // self.collection.countDocuments({},(err,count)=>{
        // self.id = count+1;
        // console.log(self.id);
        // next();
    // })

    // ProductModel.countDocuments({},(err,count)=>{
    //     if(err) console.log(err);
    //     console.log(count);
    //     console.log(self.id);
    //     self.id = count + 1
    //     next();
    // })
    
    // self.constructor.count(async function(err,data){
        //     if(err) return next(err)
        //     self.set({id: (data+1)});
        //     next();
        // });
// })


module.exports = {
    ProductModel : mongoose.model('Product',productModel)

}