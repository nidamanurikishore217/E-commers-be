const productService = require("../services/productServices")

class ProductController {

    async getAllProducts(req, res) {   
        try{
            const products = await productService.getAllProducts();
            res.json(products)
        }
        catch(error){
            res.status(500).json({message:error.message})
        } 
    }

    async getProductById(req,res){
             try{
                const product = await productService.getProductById(req.params.id);
                  if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
             }
            catch(error){
                 res.status(500).json({message:error.message})
            }
          
    }

    async createProduct(req, res) {
        try {
            const product = await productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const product = await productService.updateProduct(req.params.id, req.body);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json(product);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const product = await productService.deleteProduct(req.params.id);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
module.exports = new ProductController();