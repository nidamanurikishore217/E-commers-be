const { Router } = require('express');
const authController = require('../controllers/authController');
const customMiddleware = require('../middleWares/testMiddleware')
const router = Router();


router.post('/login', authController.login);
// router.post('/register', authController.register)
module.exports = router