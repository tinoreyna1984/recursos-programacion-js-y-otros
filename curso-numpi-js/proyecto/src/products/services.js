const { ObjectId } = require('mongodb');
const { ProductsUtils } = require('./utils');
const { Database } = require('../database/index');

const COLLECTION = 'products';

const getAll = async () => {
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const getById = async (id) => {
    const collection = await Database(COLLECTION);
    return await collection.findOne({_id : ObjectId(id)});
}

const create = async (product) => {
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product);
    return result.insertedId;
}

const generateReport = async (name, res) => {
    let products = await getAll();
    ProductsUtils.excelGenerator(products, name, res);
}

const update = async (id, newProduct) => {
    const collection = await Database(COLLECTION);
    return await collection.replaceOne(
        {
            _id : ObjectId(id)
        },
        {
            name : newProduct.name,
            precio : newProduct.precio,
            cantidad : newProduct.cantidad
        }
    );
}

const remove = async (id) => {
    const collection = await Database(COLLECTION);
    return await collection.deleteOne({_id : ObjectId(id)});
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport,
    update,
    remove
}



