"use strict"

// Manejo de eventos

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


