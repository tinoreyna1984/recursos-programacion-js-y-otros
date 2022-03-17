/*
Se crea una libreria de operaciones
*/

const Math = {};

// define las operaciones

function suma(a,b){
	return a+b;
}

function resta(a,b){
	return a-b;
}

function producto(a,b){
	return a*b;
}

function division(a,b){
	return (b != 0)?a/b:0;
}

// Se exporta las operaciones en Math

Math.suma = suma;
Math.resta = resta;
Math.producto = producto;
Math.division = division;

module.exports = Math;
