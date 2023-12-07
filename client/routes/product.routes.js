const router = require('express').Router();
const {listProduct, getProduct, deleteProduct, updateProduct, createProduct} = require('../controllers/product.controller');

router.get('/',listProduct);
router.get('/create',createProduct);
router.get('/:id',getProduct);
router.get('/update/:id',updateProduct);
router.get('/delete/:id',deleteProduct);

module.exports = {
    ProductRoutes : router
}