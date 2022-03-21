const express = require('express');
const debug = require('debug')('app:main');

// carga la configuracion
const { Config } = require('./src/config/index');
const { IndexAPI, NotFoundAPI } = require('./src/index/index');
const { ProductsAPI } = require('./src/products/index');
const { UsersAPI } = require('./src/users/index');

const app = express();

app.use(express.json());

IndexAPI(app);
ProductsAPI(app);
UsersAPI(app);
NotFoundAPI(app);

// modulos

app.listen(Config.port, () => {
    debug(`Servidor escuchando en ${Config.port}`);
});
