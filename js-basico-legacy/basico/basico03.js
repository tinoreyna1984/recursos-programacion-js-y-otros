'use strict'

// acceso a datos del objeto

var persona = {
	nombre: "Tino",
	apellido: "Reyna",
	edad: 36,
	direccion: {
		pais: "Peru",
		ciudad: "Lima",
		distrito: "La Molina",
		zipcode: "Lima 12"
	}
};

console.log(persona.nombre + " " + persona["apellido"]);

persona.ocupacion = "Ingeniero";
console.log(persona["ocupacion"]);
console.log(persona);
