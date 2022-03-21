"use strict"

// rotulando ciclos

primer_for:
for(var i=0; i < 10; i++){
	console.log("Posicion actual i: " + i);
	for(var j=0 ; j < 10; j++){
		console.log("Posicion actual j: " + j);
		continue primer_for;
	}
}

