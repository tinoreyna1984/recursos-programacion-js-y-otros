'use strict'

// Operadores muy especiales:

// Condicional (if abreviado)

var num = 10;
console.log(num == 10? true : false);

// desestructuracion de objetos (operador llave)

var persona = {
	nombre: 'Tino',
	edad: 37,
	ciudad: 'Guayaquil'
}

var {nombre, edad} = persona;
console.log(persona);
console.log(nombre);
console.log(edad);

// desestructuracion de arreglos (operador corchete)

var arr = [1,2,3,4,5,6,7,8,9,0];
var [uno, dos, tres, cuatro, cinco] = arr;
console.log(arr);
console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);
console.log(cinco);


/**
 * Acceso a propiedades de objeto
 * - Notacion punto
 * - Notacion corchete
 * 
*/

var persona = {
	nombre: 'Tino',
	edad: 37,
	ciudad: 'Guayaquil'
}

console.log(persona.nombre);
console.log(persona['edad']);

