'use strict'

// carga todo el fichero desde el head

window.addEventListener('load',
	() => {
		
		// eventos del raton

		function cambiaColor(){
			console.log("Fui presionado...");
			var bg = boton.style.background;
			if(bg == "#fff")
			{
				boton.style.background = "#ccc";
			}
			else
			{
				boton.style.background = "#fff";
			}
			return true;
		}

		function cambiaTexto(){
			console.log("Por encima...");
		}

		var boton = document.querySelector("#boton");

		// evento click
		boton.addEventListener('click', () => cambiaColor());

		// evento de pasar el puntero por encima
		boton.addEventListener('mouseover', () => cambiaTexto());

		// tecla abajo
		var nombre = document.querySelector("#nombre");
		nombre.addEventListener('keydown', (event) => {
			console.log("Tecla presionada: " + String.fromCharCode(event.keyCode));
		});
				
	}
);




