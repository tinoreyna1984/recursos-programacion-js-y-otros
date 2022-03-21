const { MongoClient } = require('mongodb');
const { Config } = require('../config/index');
const debug = require('debug')('app:module-database');


// MongoDB es NoSQL (colecciones en lugar de tablas)

var connection = null;

module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
    try {
        if (!connection) {
            const client = new MongoClient(Config.mongoUri);
            connection = await client.connect();
            debug('Nueva conexion realizada con MongoDB Atlas');
        }
        debug("Reutilizando BD");
        const db = connection.db(Config.mongoDbname);
        resolve(db.collection(collection));
    } catch (error) {
        reject(error);
    }
});
