'use strict'

/* Nuevas funciones de manejo de caracteres: startsWith y endsWith */


var saludo = "Hola, mundo";

console.log(saludo.substr(0,1) === "H");
console.log(saludo.startsWith("H"));
console.log(saludo.endsWith("H"));
console.log(saludo.endsWith("o"));
console.log(saludo.includes("o"));


// Repeticiones de strings


let texto = "Hola";
console.log(texto.repeat(5));
console.log("mundo".repeat(5));
console.log("-------------------------");

const ESPACIOS = 12;

let nombres = ["Tino", "Gabriela", "Maria"];
let telefonos = ["99887766", "88776655", "77665544"];

for(let i in nombres){
	let dif = ESPACIOS - nombres[i].length;
	console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}


// Template literals


let nombre = "Tino Reyna";
console.log(`Mi nombre es ${nombre}`);

function edad(){
	return 36;
}
console.log(`Tengo ${edad()} años`);

let multiLinea = `Salida de texto
Multilinea`;
console.log(multiLinea);


// templates con tags


function etiqueta(literales, ...substituciones){
	let resultado = "";
	
	for(let i=0; i< substituciones.length; i++){
		resultado += literales[i];
		resultado += substituciones[i];
	}
	
	return resultado;
}

let unidades = 5, costo_unitario = 10;

let mensaje = etiqueta`${unidades} lapices cuestan ${unidades*costo_unitario} soles`;

console.log(mensaje);


// valores raw en los caracteres a traves de etiquetas (no funciona con comillas simples o dobles)


let mensaje = `Hola\nMundo\n\\`, mensaje2 = String.raw`Hola\nMundo\n\\`;

console.log(mensaje);
console.log(mensaje2);


// valores por defecto


function suma(a, b){
	return a+b;
}

console.log(suma(1,2));


function suma_arg(a = 0, b = 0){
	console.log(arguments);
	return a+b;
}


console.log(suma_arg(1,2));
console.log(suma_arg());


