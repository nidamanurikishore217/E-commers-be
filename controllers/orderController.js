const orderService = require('../services/orderService')
class OrderController {
   
    async getOrderById(req,res){
        try{
            const orderId =req.params.id
            if(orderId){
                const order = await orderService.getOrderById(orderId)
                res.json(order)
            }else{
                res.status(403).json({message:"Invalid Order Id"})
            }
        }
        catch(error){
            res.status(500).json({message:error.message})
        }
    }

    async getOrderByUserId(req, res) {
        try {
            const{user} =req
            const order = await orderService.getOrderByUserId(user.userId);
            console.log(order)
            if(order){
                res.json(order);
            }else{
                res.status(404).json({"message":"No orders found!"});
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async createOrder(req, res) {
        try {
            const {user} = req
            const order = await orderService.createOrder(user.userId);
            res.status(201).json(order);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }

}

module.exports = new OrderController();