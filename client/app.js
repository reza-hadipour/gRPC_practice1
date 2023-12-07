const express = require('express');
const app = express();
const {AllRoutes} = require('./routes/index.routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(AllRoutes);

app.listen(4000,()=>{
    console.log("Client is running on port 4000");
})