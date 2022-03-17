/**
 * Express simplificará el siguiente código
 * 
    const http = require("http");

    const handleServer = function(req, res){
        res.writeHead(200, {'Content-type' : 'text/html'}); // cabecera de la respuesta
        res.write("<h1>Hola mundo</h1>"); // respuesta en el navegador
        res.end(); // fin de ejecución
    }

    const server = http.createServer(handleServer);

    server.listen(3000, () => {
        console.log("Servidor en puerto 3000");
    })

 */

// Se crea el servidor a partir del objeto Express

const express = require('express');
const server = express();

server.get('/', function(req, res){
    res.send("<h1>Hola mundo</h1>"); // respuesta en el navegador
    res.end(); // fin de ejecución
});

server.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});


