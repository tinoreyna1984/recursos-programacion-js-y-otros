'use strict'

/* Simbolos */

// crear simbolos


let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol('segundo nombre');

let persona = {
	[segundoNombre] : "Reyna"
};

persona[primerNombre] = "Tino";

console.log(persona);
console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(primerNombre);

console.log(Symbol('simbolo') === Symbol('simbolo')); //  arroja falso, los simbolos son irrepetibles


