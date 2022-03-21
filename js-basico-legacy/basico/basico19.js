"use strict"

// for-in y forEach

var persona = {
	nombre : "Tino",
	edad : 36
}



for(var prop in persona){
	console.log(prop);
}

var Persona = function(nombre, edad){
	this.nombre = nombre;
	this.edad = edad;
}

Persona.prototype.sexo = "Masculino";

var tino = new Persona("Tino", 36);

for(prop in tino){
	console.log(prop + ": " + tino[prop]); // aca se debe usar notacion corchete, no punto
}

var arr = [1,2,3,4,5,true,"hola"];

for(var index in arr)
{
	console.log("Posicion en arr: " + index);
}

function muestra(elemento){
	console.log(elemento);
}

arr.forEach(muestra);


