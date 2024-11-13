const { Router } = require('express');
const productController = require('../controllers/productController')
const router = Router();

router.get('/getProducts', productController.getProducts);

router.get('/getProduct', productController.getProduct);

router.post('/addProduct', productController.addProduct)

router.put('/:id', productController.updateProduct)

router.delete('/:id', productController.deleteProduct)

module.exports = router

