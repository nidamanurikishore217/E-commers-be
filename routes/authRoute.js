const { Router } = require('express');
const authController = require('../controllers/authController');
const customMiddleware = require('../middleWares/testMiddleware')
const router = Router();


router.post('/login', authController.login);

router.post('/register', authController.register)

router.get('/profile', customMiddleware, authController.profile)

router.get('/users', authController.users)

router.put('/users', authController.users)

module.exports = router