'use strict'

// callbacks

function primeraFuncion(fn){
	fn();
}

var f = function(){
	console.log("f");
}

primeraFuncion(f);

var f2 = function(){
	console.log("primer nivel");
}

primeraFuncion(f2);

