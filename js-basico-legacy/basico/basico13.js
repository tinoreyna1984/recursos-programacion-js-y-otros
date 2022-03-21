"use strict"

// Sobrecarga de operadores


function creaProducto(nombre = "", valor = 0){
	console.log(`Producto: ${nombre} Precio: ${valor}`);
}

function crearCamisa(valor){
	creaProducto("Camisa", valor);
}

crearCamisa(100);



// Polimorfismo
// ...
