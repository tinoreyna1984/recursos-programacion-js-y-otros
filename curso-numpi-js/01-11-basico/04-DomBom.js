'use strict'

/* DOM */

var micaja = document.getElementById("micaja");

console.log(micaja);

var micaja2 = document.getElementById("micaja").innerHTML;

console.log(micaja2);

var micaja3 = document.getElementById("micaja");
micaja3.innerHTML = "Ahora tengo otro texto.";
micaja3.style.background = "grey";
micaja3.style.color = "white";

console.log(micaja3.innerHTML);

var cajas = document.getElementsByTagName("div");
console.log(cajas);


var cajas2 = document.getElementsByClassName("divs");
console.log(cajas2);

/* BOM */

var alto = window.innerHeight;
console.log(alto);
console.log(" ");
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.height);
console.log(screen.width);
console.log(window.location.href);

function redirect(url){
	window.location.href = url;
}

//redirect("https://tinexlab.com");

function abrirVentana(url){
	window.open(url);
}

//abrirVentana("https://tinexlab.com", "");

function abrirVentana2(url){
	window.open(url, "");
}
//abrirVentana2("https://tinexlab.com", "");

function abrirVentana3(url, w, h){
	window.open(url, "", `width=${w},height=${h}`);
}
//abrirVentana3("https://tinexlab.com", "",400,200);

