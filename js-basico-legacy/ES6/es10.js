'use strict'

/* Clases */

// declaracion basica

class Persona{
	
	// constructor de la clase (new Persona()...)
	constructor(nombre){
		this.nombre = nombre;
	}
	
	// metodo
	decirNombre(){
		console.log(this.nombre);
	}
}

let tino = new Persona("Tino");
tino.decirNombre();

console.log(tino instanceof Persona); // true


// clases como expresiones


let Persona = class {
	
	// constructor de la clase (new Persona()...)
	constructor(nombre){
		this.nombre = nombre;
	}
	
	// metodo
	decirNombre(){
		console.log(this.nombre);
	}
}

let tino = new Persona("Tino");
tino.decirNombre();

console.log(tino instanceof Persona);


// clases como parametros

let Persona = class {
	
	// constructor de la clase (new Persona()...)
	constructor(nombre){
		this.nombre = nombre;
	}
	
	// metodo
	decirNombre(){
		console.log(this.nombre);
	}
}

function creadorClases( definicionClase, valor ){
	return new definicionClase(valor);
}

let tino = creadorClases(Persona, "Tino");
;
tino.decirNombre();
console.log(tino instanceof Persona);


// miembros estaticos


class Persona{
	
	// constructor de la clase (new Persona()...)
	constructor(nombre){
		this.nombre = nombre;
	}
	
	// metodo
	decirNombre(){
		console.log(this.nombre);
	}
	
	// metodo estatico
	static crear(nombre){
		return new Persona(nombre);
	}
}

let tino = Persona.crear("Tino");
tino.decirNombre();

console.log(tino instanceof Persona);


// herencia de las clases


class Rectangulo{
	
	constructor(alto, largo){
		this.alto = alto;
		this.largo = largo;
	}
	
	getArea(){
		return this.alto * this.largo;
	}
}

let rectangulo = new Rectangulo(3,2);
console.log("El area del rectangulo es " + rectangulo.getArea());

class Cuadrado extends Rectangulo{
	constructor(lado){
		super(lado,lado);
	}
	
	// sobreescribiendo funciones del padre
	getArea(){
		return super.getArea();
	}
}

let cuadrado = new Cuadrado(3);
console.log("El area del cuadrado es " + cuadrado.getArea());


