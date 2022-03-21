// centraliza la configuracion en todo el app

require('dotenv').config();

module.exports.Config = {
    port : process.env.PORT,
    mongoUri : process.env.MONGO_URI,
    mongoDbname : process.env.MONGO_DBNAME,
}
