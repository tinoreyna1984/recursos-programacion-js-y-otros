const debug = require('debug')('app:module-sales-controller');
const createError = require('http-errors');
const { SalesService } = require('./services');
const { Response } = require('../common/response');

module.exports.SalesController = {
    getSales : async (req, res) => {
        try {
            let sales = await SalesService.getAll();
            Response.success(res, 200, 'Ventas', sales);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    getSale : async (req, res) => {
        try {
            const { params : {id} } = req;
            let sale = await SalesService.getById(id);
            if(!sale){
                Response.error(res, new createError.NotFound());
            }
            else
                Response.success(res, 200, 'Venta seleccionada', sale);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    createSale : async (req, res) => {
        try {
            const {body} = req;
            if(!body || Object.keys(body) === 0){
                Response.error(res, new createError.BadRequest());
            }
            else{
                const insertedId = await SalesService.create(body);
                Response.success(res, 201, 'Venta hecha', insertedId);
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    updateSale : async (req, res) => {
        try {
            const { params : {id} } = req;
            const { body } = req;
            let sale = await SalesService.getById(id);
            if(!sale){
                Response.error(res, new createError.NotFound());
            }
            else{
                const updateId = await SalesService.update(id, body);
                Response.success(res, 201, 'Venta actualizada', updateId);
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },
    deleteSale: async (req, res) => {
        try {
            const { params : {id} } = req;
            let deletedId = await SalesService.remove(id);
            if(!deletedId){
                Response.error(res, new createError.NotFound());
            }
            else
                Response.success(res, 201, 'Venta eliminada', deletedId);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    } ,
    generateReport : (req, res) => {
        try {
            SalesService.generateReport('Ventas', res);
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    }
    
}