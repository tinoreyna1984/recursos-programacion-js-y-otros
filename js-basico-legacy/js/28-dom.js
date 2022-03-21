'use strict'

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

