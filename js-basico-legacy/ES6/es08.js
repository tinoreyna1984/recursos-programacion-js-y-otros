'use strict'

/* sets */

// conjutos de datos particulares que deben tener elementos unicos

// crear sets

let items = new Set();

items.add(1);
items.add(2);
items.add(3);
items.add(3); // no lo agrega, no permite duplicados
items.add("3"); // lo agrega, pues es un caracter y no numero

console.log(items);

let items2 = new Set([1,2,3,3,3,"3"]); // otra forma de crear sets
console.log(items2);

console.log(items.has(2)); // propiedad del set que devuelve booleano sobre la existencia de un item a buscar


// -> remover valores


let items = new Set([1,2,3,4,5,6,7]);
console.log(items);
items.delete(3); // borra el valor 3
console.log(items);
items.clear(); // vacia el set
console.log(items);


// uso de forEach en los sets


let personas = new Set(["Tino", "Gabriela", "Yayo"]);

personas.forEach(
	function(valor, llave, setOriginal){
		console.log(valor, llave, setOriginal);
	}
);


// convertir un set en un array


let numeros = new Set([1,2,3,4,5,6,7]);
console.log(numeros);

let arr1 = [...numeros];
console.log(arr1);

// aplicacion de este principio para eliminar duplicados

let numeros2 = new Array(1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7);
console.log(numeros2);

function eliminaDuplicados(numeros){
	return [...new Set(numeros)];
}

let numeros3 = eliminaDuplicados(numeros2);
console.log(numeros3);


// weakSets: tipo de sets que solo sirve para almacenar referencias a objetos


