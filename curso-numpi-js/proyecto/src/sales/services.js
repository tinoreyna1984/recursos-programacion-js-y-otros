const { ObjectId } = require('mongodb');
const { SalesUtils } = require('./utils');
const { Database } = require('../database/index');

const COLLECTION = 'sales';

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return await collection.findOne({_id : ObjectId(id)});
}

const create = async (sale) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(sale);
    return result.insertedId;
}

const generateReport = async (name, res) => {
    let sales = await getAll();
    SalesUtils.excelGenerator(sales, name, res);
}

const update = async (id, newSale) => {
    const collection = await Database(COLLECTION);
    return await collection.replaceOne(
        {
            _id : ObjectId(id)
        },
        {
            producto : newSale.producto,
            precio : newSale.precio,
            cantidad : newSale.cantidad,
            vendido : newSale.precio * newSale.cantidad
        }
    );
}

const remove = async (id) => {
    const collection = await Database(COLLECTION);
    return await collection.deleteOne({_id : ObjectId(id)});
}

module.exports.SalesService = {
    getAll,
    getById,
    create,
    generateReport,
    update,
    remove
}



