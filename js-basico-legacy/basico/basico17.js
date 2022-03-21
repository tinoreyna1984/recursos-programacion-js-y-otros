"use strict"


// Funciones call(), apply() y bind()

var carro = {
	color : "blanco",
	marca : "Mazda",
	imprimir : function(){
		var salida = this.color + " - " + this.marca;
		return salida;
	}
};

var carro2 = {
	color : "rojo",
	marca : "Toyota"
};

console.log(carro.imprimir());

var logCarro = function(arg1, arg2){
	console.log("Carro", this.imprimir());
	console.log("Argumentos: ", arg1, arg2);
	console.log("===========================");
}

// bind

var logModeloCarro = logCarro.bind(carro);

logModeloCarro("abc", "xyz");

// call

logModeloCarro.call( carro, "123", "456");

// apply

logModeloCarro.apply( carro, ["asd", "qwe"]);

// Funciones Prestadas

console.log(carro.imprimir.call(carro2));



