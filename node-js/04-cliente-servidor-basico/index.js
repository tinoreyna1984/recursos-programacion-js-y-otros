/* uso del concepto cliente-servidor basico */

const http = require("http");

// objeto de comunicacion http

const handleServer = function(req, res){
	res.writeHead(200, {'Content-type' : 'text/html'}); // cabecera de la respuesta
	res.write("<h1>Hola mundo</h1>"); // respuesta en el navegador
	res.end(); // fin de ejecución
}

// creación del servidor local

const server = http.createServer(handleServer);

// espera de la respuesta del servidor (3 segundos)

server.listen(3000, () => {
	console.log("Servidor en puerto 3000");
})


