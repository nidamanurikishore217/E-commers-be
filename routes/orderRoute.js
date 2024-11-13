const express = require('express');
const orderController = require('../controllers/orderController')
const authenticateJWT = require('../middleWares/authMiddleware');
const router = express.Router();

router.get('/',authenticateJWT ,orderController.getOrderByUserId)
router.post('/', authenticateJWT,orderController.createOrder);
router.get('/:id', orderController.getOrderById);

module.exports = router

