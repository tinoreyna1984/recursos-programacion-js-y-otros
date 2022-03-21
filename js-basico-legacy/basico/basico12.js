"use strict"

// Arreglos 02

// Argumentos

function miFuncion(a,b,c,d){
	if( arguments.length != 4 ){
		console.error("La funcion necesita 4 parametros");
	}
	else
		console.log("Devuelve: " + (a+b+c+d));
}

miFuncion(1,2,3,4);
miFuncion(2);
