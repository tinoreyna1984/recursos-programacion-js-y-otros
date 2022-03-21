"use strict"

// try-catch

var a = 10;
var b = 0;
var e = new Error("Division por cero");

try{
	var div = a/b;
	if(b === 0)
		throw e;
	console.log(div);
}
catch(e){
	console.error(e.message);
}
