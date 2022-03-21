"use strict"

// JSON

var objetoJS = {
	nombre: "Tino",
	edad : 36
};

console.log(objetoJS);

var jsonString = JSON.stringify(objetoJS);

console.log(jsonString);

var objetoDesdeJson = JSON.parse(jsonString);

console.log(objetoDesdeJson);


