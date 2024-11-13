const Order = require('../models/Order')
const Cart = require('../models/Cart')


class OrderService {
    async getOrderById(orderId) {
        return Order.findById(orderId);
    }

    async getOrderByUserId(userId) {
        return await Order.findOne({ user: userId }).populate('user')
            .populate('products.product');
    }

    async createOrder(userId) {
        const cart = await Cart.findOne({ user: userId })
            .populate('user')
            .populate('products.product');
        if (!cart) return res.status(400).json({ message: 'No items found in the cart!' })

        console.log(cart.products)
        const total = cart.products.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        console.log(total)
        const order = new Order({ user: userId, products: cart.products, total });
        await order.save(); //save order base on cart data
        cart.products = [];
        await cart.save();
        return order;
    }

}
module.exports = new OrderService()