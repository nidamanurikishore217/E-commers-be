const productServices = require("../services/productServices")

class ProductController {

    async getProducts(req, res) {   
        const products = await productServices.getProducts();
        res.json({ products });
    }

    async getProduct(req,res){
          const productId =req.params.id;
          const product = await productServices.getProductById(productId)

          if(product){
            res.json(product)
          }
          else{
            res.status(404).json({message:"product not found"})
          }
    }

    async addProduct(req, res) {
        try {
            const productData = req.body;
            const newProduct = await productServices.addProduct(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: 'Error adding product' });
        }
    }

    async updateProduct(req, res) {
        console.log("Received params:", req.params); // Log the entire params object
        
        const productId = req.params.id;
        const updateData = req.body;

        // console.log("Received productId in controller:", productId); // Debug line

        const updatedProduct = await productServices.updateProductById(productId, updateData);

        if (updatedProduct) {
            return res.json(updatedProduct);
        } else {
            return res.status(404).json({ message: 'Product not found' });
        }
    }

   async deleteProduct (req, res){
        const productId = req.params.id;
        const deletedProduct =  await productServices.deleteProductById(productId);

        if (deletedProduct) {
            res.json({ message: 'Product deleted successfully', product: deletedProduct });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
}
module.exports = new ProductController();