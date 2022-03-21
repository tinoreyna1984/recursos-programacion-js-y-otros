"use strict"

// uso de typeof (identifica el tipo de dato u objeto) e instanceof (verifica si una instancia pertenece a una clase, funcion, etc.)


function identifica(param){
	if(typeof param == "function"){
		param();
	}
	else{
		console.log(param + " es del tipo " + typeof param);
	}
}


function pertenece(param, clase = null){
	if(clase != null)
	{
		if(param instanceof clase){
			console.log("El parametro pertenece a la clase a ser comparada");
		}
		else{
			console.log("El parametro no pertenece a la clase a ser comparada");
		}
	}
	else{
		console.error("La clase no puede ser nula");
	}
	
}

function Persona(nombre, edad){
	this.nombre = nombre;
	this.edad = edad;
}

function Estudiante(){
	
}

identifica(2);
identifica("Cadena");
identifica(
	function(){
		console.log("Tipo funcion");
	}
);

var tino = new Persona("Tino",36);

identifica(tino);
pertenece(tino);
pertenece(tino, Persona);
pertenece(tino, Estudiante);


