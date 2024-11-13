const express = require('express');
const cartController = require('../controllers/cartController')
const authenticateJWT = require('../middleWares/authMiddleware');
const router = express.Router();

router.get('/', authenticateJWT, cartController.getCartByUserId)
router.post('/',  authenticateJWT,cartController.addCart);
router.get('/:id',cartController.getCartById);

module.exports = router

