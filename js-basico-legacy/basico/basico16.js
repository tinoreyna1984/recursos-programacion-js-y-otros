"use strict"


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

