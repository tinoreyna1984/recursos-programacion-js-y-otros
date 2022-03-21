'use strict'

/* Declaraciones y uniones adicionales */

// var vs let

/*

	El uso de var es para declaracion de variables en un ambito global.
	El uso de let es para declaracion de variables en un ambito especifico y limitado.

*/


let mensaje = "Hola, mundo";

console.log(mensaje);


//var mensaje = "Hola, mundo";


let mensaje  = "123";
if(1 === 1)
{
	mensaje  = "Hola, mundo";
}

console.log(mensaje);

// constantes

/*

	La constante ocupa el mismo ambito de una variable declarada con let.

*/

const CONSTANTE = 25;

console.log(CONSTANTE);

const TINO = {
	nombre : "Tino",
	apellido : "Reyna"
};

// Esto esta permitido:

TINO.nombre = "Fabricio";
TINO.apellido = "Reyna Colona";

console.log(TINO);

// Esto NO esta permitido:
/*TINO = {
	nombre : "Tino Fabricio",
	apellido : "Reyna Colona"
};*/


// Variables en ciclos (uso de var y let)


for(var i=0; i <= 10; i++)
{
	// bloque de codigo
}

console.log(i); // i = 11

for(let i=0; i <= 10; i++)
{
	// bloque de codigo
}

//console.log(i); // retorna error




// declaracion de funciones en ciclos

var funciones = [];

for(var i=0; i < 10; i++){
	funciones.push(	function(){ console.log(i); } 	); // imprime del 0 al 10
}

for(let i=0; i < 10; i++){
	funciones.push(	function(){ console.log(i); } 	); // imprime del 0 al 9
}

funciones.forEach(
	function(func){
		func();
});


