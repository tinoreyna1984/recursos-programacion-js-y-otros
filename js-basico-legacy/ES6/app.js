'use strict'

/* Declaraciones y uniones adicionales */

// var vs let

/*

	El uso de var es para declaracion de variables en un ambito global.
	El uso de let es para declaracion de variables en un ambito especifico y limitado.

*/

/*
let mensaje = "Hola, mundo";

console.log(mensaje);
*/

//var mensaje = "Hola, mundo";

/*
let mensaje  = "123";
if(1 === 1)
{
	mensaje  = "Hola, mundo";
}

console.log(mensaje);*/

// constantes

/*

	La constante ocupa el mismo ambito de una variable declarada con let.

*/

/*const CONSTANTE = 25;

console.log(CONSTANTE);

const TINO = {
	nombre : "Tino",
	apellido : "Reyna"
};

// Esto esta permitido:

TINO.nombre = "Fabricio";
TINO.apellido = "Reyna Colona";

console.log(TINO);*/

// Esto NO esta permitido:
/*TINO = {
	nombre : "Tino Fabricio",
	apellido : "Reyna Colona"
};*/


// Variables en ciclos (uso de var y let)
/*

for(var i=0; i <= 10; i++)
{
	// bloque de codigo
}

console.log(i); // i = 11

for(let i=0; i <= 10; i++)
{
	// bloque de codigo
}

console.log(i); // retorna error


*/

// declaracion de funciones en ciclos
/*
var funciones = [];

for(var i=0; i < 10; i++){
	funciones.push(	function(){ console.log(i); } 	); // imprime del 0 al 10
}

for(let i=0; i < 10; i++){
	funciones.push(	function(){ console.log(i); } 	); // imprime del 0 al 9
}

funciones.forEach(
	function(func){
		func();
});
*/

/* Nuevas funciones de manejo de caracteres: startsWith y endsWith */

/*
var saludo = "Hola, mundo";

console.log(saludo.substr(0,1) === "H");
console.log(saludo.startsWith("H"));
console.log(saludo.endsWith("H"));
console.log(saludo.endsWith("o"));
console.log(saludo.includes("o"));
*/

// Repeticiones de strings

/*
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
*/

// Template literals

/*
let nombre = "Tino Reyna";
console.log(`Mi nombre es ${nombre}`);

function edad(){
	return 36;
}
console.log(`Tengo ${edad()} años`);

let multiLinea = `Salida de texto
Multilinea`;
console.log(multiLinea);
*/

// templates con tags

/*
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
*/

// valores raw en los caracteres a traves de etiquetas (no funciona con comillas simples o dobles)

/*
let mensaje = `Hola\nMundo\n\\`, mensaje2 = String.raw`Hola\nMundo\n\\`;

console.log(mensaje);
console.log(mensaje2);
*/

// valores por defecto

/*
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
*/

/* Nuevas funcionalidades en ES6 */

// parametros REST

// solo puede haber un parametro REST precedido de puntos suspensivos
// siempre es colocado al final de los parametros declarados

/*
function agregar_alumno(arr_alumno, ...alumnos){
	// el primer elemento es un arreglo fijo
	// el segundo elemento representa a otro arreglo conformado por diversos valores como parametros
	console.log(arguments);
	
	// lleno el arreglo de alumnos
	for(let i=0; i < alumnos.length; i++){
		arr_alumno.push(alumnos[i]);
	}
	
	return arr_alumno;
}

let alumnos_arr = ["Tino"];

let alumnos_arr2 = agregar_alumno(alumnos_arr, "Fabricio", "Eduardo");

console.log(alumnos_arr2);
*/


// operador spread

// tiene la misma notacion que REST, tres puntos suspensivos, pero hace referencia a un arreglo de valores

/*
let numeros = [10,20,30,100,1000];

let maximo = Math.max(...numeros);

console.log(maximo);

// puede romper con la referencia

let persona1 = { nombre: "Tino", edad: 36 };
// let persona2 = persona1; // pasara por referencia persona1 a persona2 y ambos resultaran iguales en el cambio de una de sus propiedades

let persona2 = {...persona1}; // ya no tiene el efecto del pase por referencia, los valores de persona1 se pasan por valor

persona2.nombre = "Fabricio";
persona2.edad = 30;

console.log(persona1);
console.log(persona2);
*/

// paso de atributos con spread

/*
let persona1 = { nombre: "Tino", edad: 36 };
let persona2 = { nombre: "Fabricio", edad: 35, direccion: "La Molina", trabaja: true };

persona1 = {
	...persona2,
	...persona1
}

console.log(persona1);
console.log(persona2);
*/

/* Funciones de flecha */

/*var sumar01 = function(a, b){
	return a+b;
}

let sumar02 = (a,b) => {
	return a+b;
}

console.log(sumar01(1,2));
console.log(sumar02(1,2));*/

// en arreglos

/*
var arreglo = [9,10,1,6,3,7];

var ordenadoES5 = arreglo.sort(function(a,b){
	return (a-b);
});

let ordenadoES6 = arreglo.sort( (a,b) => (a-b) );

console.log(ordenadoES5);
console.log(ordenadoES6);

*/

/* Adiciones a los objetos */

// Metodos concisos

/*
var persona = {
	nombre : "Tino",
	
	getNombre() {
		console.log(this.nombre); // apunta al this que instancia a persona
	}
}

persona.getNombre(); // getNombre es un metodo conciso

*/

// nombre de propiedades computadas o personalizadas (acceso a propiedades)

/*
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

*/

// Object.is()

/*
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
*/

// Object.assign()

/*
var obj1 = {};
var obj0 = {
	nombre : "Tino",
	apellido : "Reyna"
}

console.log(obj0);
console.log(Object.assign(obj1, obj0));
*/

/* Prototipos mas poderosos y desestructuracion */

// proxima revision

/* Simbolos */

// crear simbolos

/*
let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol('segundo nombre');

let persona = {
	[segundoNombre] : "Reyna"
};

persona[primerNombre] = "Tino";

console.log(persona);
console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(primerNombre);

console.log(Symbol('simbolo') === Symbol('simbolo')); //  arroja falso, los simbolos son irrepetibles
*/

/* sets */

// conjutos de datos particulares que deben tener elementos unicos

// crear sets
/*
let items = new Set();

items.add(1);
items.add(2);
items.add(3);
items.add(3); // no lo agrega, no permite duplicados
items.add("3"); // lo agrega, pues es un caracter y no numero

console.log(items);

let items2 = new Set([1,2,3,3,3,"3"]); // otra forma de crear sets
console.log(items2);

console.log(items.has(2)); // propiedad del set que devuelve booleano sobre la existencia de un item a buscar
*/

// -> remover valores

/*
let items = new Set([1,2,3,4,5,6,7]);
console.log(items);
items.delete(3); // borra el valor 3
console.log(items);
items.clear(); // vacia el set
console.log(items);
*/

// uso de forEach en los sets

/*
let personas = new Set(["Tino", "Gabriela", "Yayo"]);

personas.forEach(
	function(valor, llave, setOriginal){
		console.log(valor, llave, setOriginal);
	}
);
*/

// convertir un set en un array
/*

let numeros = new Set([1,2,3,4,5,6,7]);
console.log(numeros);

let arr1 = [...numeros];
console.log(arr1);

// aplicacion de este principio para eliminar duplicados

let numeros2 = new Array(1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7);
console.log(numeros2);

function eliminaDuplicados(numeros){
	return [...new Set(numeros)];
}

let numeros3 = eliminaDuplicados(numeros2);
console.log(numeros3);
*/

// weakSets: tipo de sets que solo sirve para almacenar referencias a objetos

/* maps */

// -> conjuntos de elementos que se rigen bajo el esquema clave-valor

// maps y sus metodos
/*
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
*/

// inicializar maps
/*
let mapa = new Map([ ["nombre", "Tino"], ["edad", 36] ]);
console.log(mapa);
*/
// forEach en los maps
/*
let mapa = new Map([ ["nombre", "Tino"], ["edad", 36] ]);

mapa.forEach( (valor, llave) => console.log(`${llave} : ${valor}`) ); // en ese orden de argumentos
*/
// nuevo ciclo FOR-OF

/*
// ciclos for tradicionales:
let numeros = [1,2,3,4,5,6];

for(let i=0; i<numeros.length; i++){
	console.log(numeros[i]);
}

for(let i in numeros){
	console.log(numeros[i]);
}

*/

// uso del for-of
/*
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

*/

/* Clases */

// declaracion basica
/*
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
*/

// clases como expresiones

/*
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
*/

// clases como parametros
/*
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
*/

// miembros estaticos

/*
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
*/

// herencia de las clases

/*
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
*/

/* Promesas */

/*
let promesa = new Promise((resolve, reject) => {
	let number = Math.floor(Math.random() * 10); // valor aleatorio

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('No esperaba un numero menor o igual a 5')),
		1300
	); // funcion anonima que usa un if abreviado segun el valor del numero
});

promesa
	.then(number => console.log("Obtuve " + number)) // then llama al resolve
	.catch(error => console.error(error)); // catch llama al reject
*/

// caso practico de promesas

/*

const empleados = [
	{id : 1, nombre : "Tino"},
	{id : 2, nombre : "Gabriela"},
	{id : 3, nombre : "Maria"}
];

const salarios = [
	{id : 1, salario : 1000},
	{id : 2, salario : 2000}
];

const getEmpleado = ( id ) => {
	
	return new Promise( (resolve, reject) => {
		
		const empleadoDB = empleados.find( empleado => empleado.id === id ); // busca empleado segun la tabla
		
		if(!empleadoDB){
			reject(`No existe empleado con el id ${id}`);
		}
		else{
			resolve(empleadoDB);
		}
		
	});
};

const getSalario = (empleado) => {
	
	return new Promise( (resolve, reject) => {
		
		const salarioDB = salarios.find( salario => salario.id === empleado.id ); // busca empleado segun la tabla
		
		if(!salarioDB){
			reject(`No existe salario para el empleado ${empleado.nombre}`);
		}
		else{
			resolve(
				{
					id : empleado.id,
					nombre : empleado.nombre,
					salario : salarioDB.salario
				}
			);
		}
		
	});
	
};

getEmpleado(1)
	.then( getSalario )
	.then( console.log )
	.catch((error) => console.log(error));
	
*/


/* ES7: await-async */

/*
const empleados = [
	{id : 1, nombre : "Tino"},
	{id : 2, nombre : "Gabriela"},
	{id : 3, nombre : "Maria"}
];

const salarios = [
	{id : 1, salario : 1000},
	{id : 2, salario : 2000}
];


const getEmpleado = async( id ) => {
	
	const empleadoDB = empleados.find( empleado => empleado.id === id ); // busca empleado segun la tabla
	
	if(!empleadoDB){
		throw new Error(`No existe empleado con el id ${id}`);
	}
	else{
		return empleadoDB;
	}
	
};

const getSalario = async(empleado) => {
	
		
	const salarioDB = salarios.find( salario => salario.id === empleado.id ); // busca salario segun la tabla
	
	if(!salarioDB){
		throw new Error(`No existe salario para el empleado ${empleado.nombre}`);
	}
	else{
		return {
				id : empleado.id,
				nombre : empleado.nombre,
				salario : salarioDB.salario
		};
	}
	
};

const getInformacion = async(id) => {
	const emp = await getEmpleado(id);
	const sal = await getSalario(emp);
	
	return `${emp.nombre} tiene el salario de ${sal.salario}`;
};

getInformacion(1).then(console.log)
.catch((error) => console.log(error));

*/

