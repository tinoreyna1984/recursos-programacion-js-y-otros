'use strict'

// paso de parametros por valor y por referencia

var a = 10;
var b = a;
console.log("a: ",a);
console.log("b: ",b);

a = 20;
console.log("a: ",a);
console.log("b: ",b);

console.log("Las variables de tipo de dato primitivo se pasan por valor");


var c = { nombre: "Juana" };
var d = c;
console.log("c.nombre: ",c.nombre);
console.log("d.nombre: ",d.nombre);

c.nombre = "Maria";
console.log("c.nombre: ",c.nombre);
console.log("d.nombre: ",d.nombre);

d.nombre = "Gabriela";
console.log("c.nombre: ",c.nombre);
console.log("d.nombre: ",d.nombre);

console.log("Los objetos se pasan por referencia");
