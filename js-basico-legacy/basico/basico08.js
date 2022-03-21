"use strict"

// establecer prototipos (aplica para propiedades y metodos, pero mayormente para los ultimos)


function Persona(nombre, apellido, edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
}

Persona.prototype.nombreCompleto = function(){
	return this.nombre + " " + this.apellido + " (" + this.edad + ") ";
}

var tino = new Persona("Tino","Reyna",36);

console.log(tino.nombreCompleto());


