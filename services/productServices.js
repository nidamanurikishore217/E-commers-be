const products = require("../models/productModel")

class ProductServices {
   async getProducts(){
    return products.map(product => ({
        name: product.name,
        description: product.description,
    }));
}

async getProductById(id){
      const product = products.find(p => p.id === id)
      return product ? {
        name:product.name,
        description:product.description
      }:null
    };


    async addProduct(productData) {
        const newProduct = {
            id: (products.length + 1).toString(),
            ...productData
        };
        products.push(newProduct);
        return newProduct;
    }

    async updateProductById(id, updateData) {
        console.log("Received productId in service:", id); // Debug line

        const productIndex = products.findIndex((p) => p.id === id);

        if (productIndex !== -1) {
            products[productIndex] = { ...products[productIndex], ...updateData };
            return products[productIndex];
        }

        return null; // Return null if not found
    }

    deleteProductById (id) {
        const productIndex = products.findIndex(p => p.id === id);
        if (productIndex !== -1) {
            const deletedProduct = products.splice(productIndex, 1);
            return deletedProduct[0];
        }
        return null;
    }

}
module.exports = new ProductServices();