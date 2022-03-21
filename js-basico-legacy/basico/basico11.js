"use strict"

// Arreglos 01


var arreglo = ["a", "e", "i", "o", 'u'];

console.log(arreglo);

function identifica(par){
	return typeof par;
}

console.log(arreglo.map(identifica));

var arr2 = new Array(1, 2, 3, 4, "cinco");

console.log(arr2);

console.log(arr2.map(identifica));


console.log(arreglo.join(''));

arr2.push("6")
console.log(arr2);

var unoMenos = arr2.pop();
console.log(arr2);
console.log(unoMenos);

arr2.splice(2,1,"10","20");
console.log(arr2);

arr2 = arr2.slice(2,3);
console.log(arr2);


