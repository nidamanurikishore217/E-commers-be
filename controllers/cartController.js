const cartService = require("../services/cartService")

class CartController {


    async getCartById(req, res) {
        try {
            const cartId = req.params.id;
            const carts = await cartService.getCartById(cartId);
            if (!carts) {
                return res.status(400).json({ message: "No cart initiated yet!" })
            }
            res.json(carts);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }

    async getCartByUserId(req, res) {
        try {
            const { user } = req
            console.log(req.user)
            const cart = await cartService.getCartByUserId(user.userId);
            if (!cart) {
                return res.status(400).json({ message: "No cart initiated yet!" })
            }
            res.json(cart);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }

    async addCart(req, res) {
        try {
            const { user } = req
            const { productId, quantity } = req.body; //extract productId and quantity
            let cart = await cartService.addCart(user.userId, productId, quantity);
            res.status(201).json(cart);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }


}
module.exports = new CartController();