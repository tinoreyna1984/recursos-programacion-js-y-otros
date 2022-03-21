'use strict'

// carga todo el fichero desde el head

window.addEventListener('load',
	() => { // la funcion flecha se ve mas elegante para los callbacks
		
		var tiempo = setInterval(() => {
			console.log("setInterval ejecutado");
		}, 3000);
		
		setTimeout(() => {
			console.log("BOOM!!!"); // estalla despues de un minuto
		}, 60000);
		
		
	}
);




