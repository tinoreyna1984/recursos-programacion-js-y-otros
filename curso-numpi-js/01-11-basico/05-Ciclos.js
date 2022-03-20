'use strict'

// ciclo for: es conocido
for(let i=0; i < 10; i++){
    console.log('Hola Tino');
}

/**
 * Ciclo for-in:
 * - En objetos: recorre para devolver las claves de las propiedades del objeto.
 * - En arreglos: recorre para devolver los indices de los elementos del arreglo.
 */

 var persona = {
    nombre: 'Tino',
    edad: 37,
    ciudad: 'Guayaquil'
};

for(let clave in persona){
    console.log(clave);
} // devuelve los nombres de claves

var arr = [1,2,3,4,'cinco'];

for(let index in arr){
    console.log(index);
} // devuelve las posiciones de los elementos

// Ciclo for-of: recorre un arreglo especifico

var arr = [1,2,3,4,'cinco'];

for(let item of arr){
    console.log(item);
} // devuelve los elementos del arreglo

var nombre = 'Tino';
for(let letra of nombre){
    console.log(letra);
} // devuelve cada letra del nombre Tino


