const Cart = require("../models/Cart")

class CardService {

  async getCartById(cartId) {
    // Populate 'user' and 'products.product' to get detailed information
    return Cart.findById(cartId).populate('user')
      .populate('products.product');
  }

  async getCartByUserId(userId) {
    console.log(userId);
    return await Cart.findOne({ user: userId }).populate('user')
      .populate('products.product');
  }

  async addCart(userId, productId, quantity) {
    let cart = await Cart.findOne({ user: userId }); //Find user cart if user has one already
    if (!cart) {  //If there is no cart initiated then create one for user
      cart = new Cart({ user: userId, products: [] });
    }
    cart.products.push({ product: productId, quantity });
    await cart.save();
    return cart;
  }

}
module.exports = new CardService();