"use strict"

// funciones anonimas

function ejecutarFuncion(fn){
	fn();
	return true;
}

ejecutarFuncion(
	function(){
		console.log("Funcion anonima ejecutada...");
	}
);

