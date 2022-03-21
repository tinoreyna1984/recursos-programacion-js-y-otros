"use strict"

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

persona.imprimir();
