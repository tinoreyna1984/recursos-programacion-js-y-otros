'use strict'

/* maps */

// -> conjuntos de elementos que se rigen bajo el esquema clave-valor

// maps y sus metodos

let mapa = new Map();

mapa.set("nombre", "Tino");
mapa.set("edad", 36);
console.log(mapa);
console.log(mapa.size);

console.log(mapa.get("nombre")); // Tino
console.log(mapa.get("edad")); // 36
console.log(mapa.has("nombre")); // true
console.log(mapa.has("apellido")); // false

console.log("--------------------------------------------------");
mapa.set("ciudad", "Lima");
console.log(mapa);
console.log(mapa.delete("ciudad"));
console.log(mapa);
console.log("--------------------------------------------------");
console.log(mapa);
mapa.clear();
console.log(mapa);


// inicializar maps

let mapa = new Map([ ["nombre", "Tino"], ["edad", 36] ]);
console.log(mapa);

// forEach en los maps

let mapa = new Map([ ["nombre", "Tino"], ["edad", 36] ]);

mapa.forEach( (valor, llave) => console.log(`${llave} : ${valor}`) ); // en ese orden de argumentos

// nuevo ciclo FOR-OF


// ciclos for tradicionales:
let numeros = [1,2,3,4,5,6];

for(let i=0; i<numeros.length; i++){
	console.log(numeros[i]);
}

for(let i in numeros){
	console.log(numeros[i]);
}



// uso del for-of

let numeros = [1,2,3,4,5,6];

for(let numero of numeros){ // numero no es un indice, es una variable que representa a cada elemento de numeros
	console.log(numero);
}

console.log("------------------------------------------------");

let personas = [
	{nombre : "Tino", edad : 36},
	{nombre : "Gabriela", edad : 30},
	{nombre : "Pedro", edad : 25}
]

for(let persona of personas){
	console.log(`${persona.nombre} tiene ${persona.edad} años.`);
}

console.log("------------------------------------------------");

let personas2 = new Set([{nombre : "Tino", edad : 36},
						{nombre : "Gabriela", edad : 30},
						{nombre : "Pedro", edad : 25}]);

for(let persona of personas2){
	console.log(`${persona.nombre} tiene ${persona.edad} años.`);
}

console.log("------------------------------------------------");

let personas3 = new Map( [ ["nombre", "Tino"], ["edad", 36] ] )

for(let persona of personas3){
	console.log(persona);
}



