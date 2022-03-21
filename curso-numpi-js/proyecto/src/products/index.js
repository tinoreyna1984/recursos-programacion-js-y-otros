const express = require('express');

const {ProductsController} = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
        .get('/', ProductsController.getProducts)
        .get('/report', ProductsController.generateReport)
        .get('/:id', ProductsController.getProduct)
        .put('/:id', ProductsController.updateProduct)
        .delete('/:id', ProductsController.deleteProduct)
        .post('/', ProductsController.createProduct);
    app.use('/api/products', router);
}


