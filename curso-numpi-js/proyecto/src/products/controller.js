const debug = require('debug')('app:module-products-controller');
const createError = require('http-errors');
const { ProductsService } = require('./services');
const { Response } = require('../common/response');

module.exports.ProductsController = {
    getProducts : async (req, res) => {
        try {
            let products = await ProductsService.getAll();
            Response.success(res, 200, 'Lista de productos', products);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    getProduct : async (req, res) => {
        try {
            const { params : {id} } = req;
            let product = await ProductsService.getById(id);
            if(!product){
                Response.error(res, new createError.NotFound());
            }
            else
                Response.success(res, 200, 'Producto seleccionado', product);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    createProduct : async (req, res) => {
        try {
            const {body} = req;
            if(!body || Object.keys(body) === 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const insertedId = await ProductsService.create(body);
                Response.success(res, 201, 'Producto creado', insertedId);
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    generateReport : (req, res) => {
        try {
            ProductsService.generateReport('Inventario', res);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    }
    
    // pendiente update y delete
    
}