"use strict"

// bloquear el menu contextual del menu (click derecho)

/*

<body oncontextmenu="return false;"></body>

*/

// onsubmit: paso de parametros


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

