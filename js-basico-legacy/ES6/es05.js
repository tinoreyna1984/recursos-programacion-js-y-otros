'use strict'

/* Adiciones a los objetos */

// Metodos concisos


var persona = {
	nombre : "Tino",
	
	getNombre() {
		console.log(this.nombre); // apunta al this que instancia a persona
	}
}

persona.getNombre(); // getNombre es un metodo conciso



// nombre de propiedades computadas o personalizadas (acceso a propiedades)


// ES5

var persona = {}
var apellido = "apellido";

persona["primer nombre"] = "Tino";
persona[apellido] = "Reyna";

//console.log(persona["primer nombre"]);
//console.log(persona[apellido]);
//console.log(persona);

// ES6

var apellido = "primer apellido";
var sufijo = " nombre";
var persona = {
	["primer" + sufijo] : "Tino",
	[apellido] : "Reyna"
}

console.log(persona["primer nombre"]);
console.log(persona[apellido]);
console.log(persona);



// Object.is()


console.log(+0 == -0); // devuelve true
console.log(+0 === -0); // devuelve true, lo cual no deberia ser asi
console.log(Object.is(+0, -0)); // devuelve false, retorno correcto

console.log("--------------");

console.log(5 == 5);
console.log(5 == "5");
console.log(5 === 5);
console.log(5 === "5");
console.log(Object.is(5, 5)); // funciona correctamente como el operador ===
console.log(Object.is(5, "5")); // funciona correctamente como el operador ===


// Object.assign()


var obj1 = {};
var obj0 = {
	nombre : "Tino",
	apellido : "Reyna"
}

console.log(obj0);
console.log(Object.assign(obj1, obj0));

