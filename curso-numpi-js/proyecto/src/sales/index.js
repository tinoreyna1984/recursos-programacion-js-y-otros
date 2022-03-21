const express = require('express');

const {SalesController} = require('./controller');

const router = express.Router();

module.exports.SalesAPI = (app) => {
    router
        .get('/', SalesController.getSales)
        .get('/report', SalesController.generateReport)
        .get('/:id', SalesController.getSale)
        .put('/:id', SalesController.updateSale)
        .delete('/:id', SalesController.deleteSale)
        .post('/', SalesController.createSale);
    app.use('/api/sales', router);
}


