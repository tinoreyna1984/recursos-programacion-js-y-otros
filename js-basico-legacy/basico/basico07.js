"use strict"

// instanciacion de una funcion (algo parecido a hacerlo con clases)

function Persona(nombre, apellido, edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	
	this.nombreCompleto = function(){
		return this.nombre + " " + this.apellido + " (" + this.edad + ") ";
	}
}

var persona = new Persona("Tino", "Reyna", 36);

console.log(persona.nombreCompleto());

