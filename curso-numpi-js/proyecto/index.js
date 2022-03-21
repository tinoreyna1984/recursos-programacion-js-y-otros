const express = require('express');
const debug = require('debug')('app:main');

// carga la configuracion
const { Config } = require('./src/config/index');
const { ProductsAPI } = require('./src/products/index');
const { UsersAPI } = require('./src/users/index');

const app = express();

app.use(express.json());

ProductsAPI(app);
UsersAPI(app);

// modulos

app.listen(Config.port, () => {
    debug(`Servidor escuchando en ${Config.port}`);
});
