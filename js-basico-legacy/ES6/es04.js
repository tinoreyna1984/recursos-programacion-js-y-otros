'use strict'

/* Funciones de flecha */

var sumar01 = function(a, b){
	return a+b;
}

let sumar02 = (a,b) => {
	return a+b;
}

console.log(sumar01(1,2));
console.log(sumar02(1,2));

// en arreglos


var arreglo = [9,10,1,6,3,7];

var ordenadoES5 = arreglo.sort(function(a,b){
	return (a-b);
});

let ordenadoES6 = arreglo.sort( (a,b) => (a-b) );

console.log(ordenadoES5);
console.log(ordenadoES6);



