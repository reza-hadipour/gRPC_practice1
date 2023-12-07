const router = require('express').Router();
const {ProductRoutes} = require('./product.routes');

router.use('/product',ProductRoutes);

module.exports = {
    AllRoutes : router
}