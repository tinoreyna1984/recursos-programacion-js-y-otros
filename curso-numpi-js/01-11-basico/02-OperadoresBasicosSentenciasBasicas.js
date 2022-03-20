'use strict'

var a = 2;
var b = 4;
var c = a + b;
console.log(c);

a = 10;

if(a > 1 and a <= 5){
	console.log("Cae por aqui - 1");
}
else if(a > 5 and a <= 9){
	console.log("Cae por aqui - 2");
}
else
{
	console.log("Cae por aqui - 3");
}

var b = "pepe";

switch(b.length){
	case 4:
		console.log("Tiene 4 caracteres");
		break;
	case 1:
		console.log("Tiene 1 caracter");
		break;
	default:
		console.log("Otra cantidad");
		break;
}


