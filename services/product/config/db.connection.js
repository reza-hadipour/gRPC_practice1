const {default: mongoose} = require('mongoose');

module.export = mongoose.connect("mongodb://127.0.0.1:27017/grpc_prc1")
.then(()=>{
    console.log("Connected to DB.");
})
.catch( (err)=>{
    console.log(err.message);
})