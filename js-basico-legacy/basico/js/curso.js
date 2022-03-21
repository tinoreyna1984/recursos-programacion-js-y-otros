'use strict'

// consola:

//console.log('Esto es util para el debug de seguimiento');
/*console.warn('Aqui lanzo una especie de advertencia');
console.info('Permite que este rastreo sea informativo');
console.error('Aqui lanzo un mensaje de error');*/

/*var objeto = {
	nombre: "Tino",
	edad: 36,
	casado: false,
	// objeto dentro de objeto
	objetoHijo: {
		nombre: "Tinito"
	}
};

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.objetoHijo.nombre);*/

// paso de parametros por valor y por referencia

/*var a = 10;
var b = a;
console.log("a: ",a);
console.log("b: ",b);

a = 20;
console.log("a: ",a);
console.log("b: ",b);

console.log("Las variables de tipo de dato primitivo se pasan por valor");


var c = { nombre: "Juana" };
var d = c;
console.log("c.nombre: ",c.nombre);
console.log("d.nombre: ",d.nombre);

c.nombre = "Maria";
console.log("c.nombre: ",c.nombre);
console.log("d.nombre: ",d.nombre);

d.nombre = "Gabriela";
console.log("c.nombre: ",c.nombre);
console.log("d.nombre: ",d.nombre);

console.log("Los objetos se pasan por referencia");*/

// acceso a datos del objeto

/*var persona = {
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
console.log(persona);*/

// callbacks

/*function primeraFuncion(fn){
	fn();
}

var f = function(){
	console.log("f");
}

primeraFuncion(f);

var f2 = function(){
	console.log("primer nivel");
}

primeraFuncion(f2);*/


// asignar propiedades a una funcion

/*function a(){
	console.log("Funcion A");
}

a();

a.nombre = "Tino";

console.log(a.nombre);*/

// asignar metodos a un objeto

/*var persona = {
	nombre: "Tino",
	apellido: "Reyna",
	presentacion: function(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
	},
	direccion: {
		pais: "Peru",
		obtenerDireccion: function(){
		var self = this;
			console.log(self.pais);
		}
	}
	
};

persona.direccion.obtenerDireccion();*/

// instanciacion de una funcion (algo parecido a hacerlo con clases)

/*function Persona(nombre, apellido, edad){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	
	this.nombreCompleto = function(){
		return this.nombre + " " + this.apellido + " (" + this.edad + ") ";
	}
}

var persona = new Persona("Tino", "Reyna", 36);

console.log(persona.nombreCompleto());*/

// establecer prototipos (aplica para propiedades y metodos, pero mayormente para los ultimos)

/*
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
*/

// funciones anonimas

/*
function ejecutarFuncion(fn){
	fn();
	return true;
}

ejecutarFuncion(
	function(){
		console.log("Funcion anonima ejecutada...");
	}
);
*/

// uso de typeof (identifica el tipo de dato u objeto) e instanceof (verifica si una instancia pertenece a una clase, funcion, etc.)

/*
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
*/

// Arreglos 01

/*
var arreglo = ["a", "e", "i", "o", 'u'];

console.log(arreglo);

function identifica(par){
	return typeof par;
}

console.log(arreglo.map(identifica));

var arr2 = new Array(1, 2, 3, 4, "cinco");

console.log(arr2);

console.log(arr2.map(identifica));


console.log(arreglo.join(''));

arr2.push("6")
console.log(arr2);

var unoMenos = arr2.pop();
console.log(arr2);
console.log(unoMenos);

arr2.splice(2,1,"10","20");
console.log(arr2);

arr2 = arr2.slice(2,3);
console.log(arr2);
*/

// Arreglos 02

// Argumentos

/*function miFuncion(a,b,c,d){
	if( arguments.length != 4 ){
		console.error("La funcion necesita 4 parametros");
	}
	else
		console.log("Devuelve: " + (a+b+c+d));
}

miFuncion(1,2,3,4);
miFuncion(2);*/

// Sobrecarga de operadores

/*
function creaProducto(nombre = "", valor = 0){
	console.log(`Producto: ${nombre} Precio: ${valor}`);
}

function crearCamisa(valor){
	creaProducto("Camisa", valor);
}

crearCamisa(100);

*/

// Polimorfismo
// ...

// Objetos Number y Boolean

/*var a = new Number(20);
var b = new Boolean(true);*/

// Expresiones regulares

/*
var reg1 = /a/;

var mensaje = "Hola mundo";

var arr = mensaje.match(reg1);
console.log(arr);
*/

// try-catch

/*var a = 10;
var b = 0;
var e = new Error("Division por cero");

try{
	var div = a/b;
	if(b === 0)
		throw e;
	console.log(div);
}
catch(e){
	console.error(e.message);
}*/

// Cookies

// Levantar servidor: http-server <ruta de la pagina web>
// En el navegador: http://localhost:8080/index.html

/*document.cookie = "nombre=tino";
document.cookie = "apellido=reyna";

console.log(document.cookie);*/

/*var demo = "123;123*123'123/ 123";


console.log(demo);
console.log(escape(demo));
console.log(unescape(escape(demo)));*/


/*
function crearCookie(nombre,valor){
	valor = escape(valor);
	
	var hoy =  new Date();
	hoy.setDate(hoy.getMonth() + 1);
	
	document.cookie = nombre + "=" + valor + "; expires=" + hoy.toUTCString() + ";";
}

function borrarCookie(nombre){
	
	var hoy =  new Date();
	hoy.setDate(hoy.getMonth() - 1);
	
	document.cookie = nombre + "=x" + "; expires=" + hoy.toUTCString() + ";";
}

crearCookie("nombre","tino");
//borrarCookie("nombre");
crearCookie("apellido","reyna");
crearCookie("correo","tinoreyna1984@gmail.com");


console.log(document.cookie);

function getCookie(nombre){
	var cookies = document.cookie;
	
	var cookieArr = cookies.split("; ");
	
	for(var i = 0; i < cookieArr.length; i++){
		var parArr = cookieArr[i].split("=");
		cookieArr[i] = parArr;
		
		if(parArr[0] === nombre){
			return unescape(parArr[1]);
		}
	}
	
	return undefined;
}

console.log(getCookie("correo"));
*/

// Funciones call(), apply() y bind()

/*

var carro = {
	color : "blanco",
	marca : "Mazda",
	imprimir : function(){
		var salida = this.color + " - " + this.marca;
		return salida;
	}
};

var carro2 = {
	color : "rojo",
	marca : "Toyota"
};

console.log(carro.imprimir());

var logCarro = function(arg1, arg2){
	console.log("Carro", this.imprimir());
	console.log("Argumentos: ", arg1, arg2);
	console.log("===========================");
}

// bind

var logModeloCarro = logCarro.bind(carro);

logModeloCarro("abc", "xyz");

// call

logModeloCarro.call( carro, "123", "456");

// apply

logModeloCarro.apply( carro, ["asd", "qwe"]);

// Funciones Prestadas

console.log(carro.imprimir.call(carro2));

*/

// JSON
/*
var objetoJS = {
	nombre: "Tino",
	edad : 36
};

console.log(objetoJS);

var jsonString = JSON.stringify(objetoJS);

console.log(jsonString);

var objetoDesdeJson = JSON.parse(jsonString);

console.log(objetoDesdeJson);
*/

// for-in y forEach

/*var persona = {
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

arr.forEach(muestra);*/

// rotulando ciclos

/*
primer_for:
for(var i=0; i < 10; i++){
	console.log("Posicion actual i: " + i);
	for(var j=0 ; j < 10; j++){
		console.log("Posicion actual j: " + j);
		continue primer_for;
	}
}
*/

// Funciones de tiempo
/*
setTimeout(function(){
	console.log("Ocurre un timeout...");
}, 1000); // 1 segundo expresado en milisegundos

*/

/*
var segundos = 0

var intervalo = setInterval(function(){
	segundos++;
	console.log("Transcurrieron " + segundos + " segundos");
	if(segundos === 5)
		clearInterval(intervalo);
}, 1000);
*/

/*
var persona = {
	nombre : "Tino",
	edad : 30,
	imprimir : function(){
		var tino = this;
		setTimeout(function(){
			console.log(tino.nombre + " (" + tino.edad + ")");
		}, 5000);
	}
}

persona.imprimir();*/

// Manejo de eventos

/*

var objeto = document.getElementById("objDemo");
console.log(objeto);

function evento(arg){
	console.log("Me dispare...");
	console.log(arg);
}

objeto.addEventListener("click", evento); // el evento usado en HTML, en JS es sin la palabra ON

var boton = document.getElementById("objBoton");

function eventoMouse(arg){
	console.log("Presione boton...");
	console.log(arg.x, arg.y);
}

boton.addEventListener("click", eventoMouse);

*/

// bloquear el menu contextual del menu (click derecho)

/*

<body oncontextmenu="return false;"></body>

*/

// onsubmit: paso de parametros

/*
function getParamURL(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

function validar(){
	
	var nombre = document.getElementById("txtNombre").value;
	var apellido = document.getElementById("txtApellido").value;
	
	if(nombre.length < 1 || apellido.length < 1)
		return false;
	
	return true;
}

console.log(window.location.search);
console.log(getParamURL("txtNombre"));
console.log(getParamURL("txtApellido"));
*/

// cajas de dialogo

/*

// alerta
alert("Soy una alerta");

// confirmacion
var ok = confirm("Esta seguro?");
console.log(ok);

// cuadro de dialogo
var nombre = prompt("Ingrese su nombre", "Ingrese");
console.log(nombre);

*/

// Modo estricto (use strict)

/*

Lo vine dejando desde el inicio del codigo.
Es opcional, pero ayuda en muchos casos. Puede usarse dentro de una funcion especifica,
en lugar de hacerlo de manera general

*/





