"use strict"


// asignar metodos a un objeto

var persona = {
	nombre: "Tino",
	apellido: "Reyna",
	presentacion: function(){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
	},
	direccion: {
		pais: "Peru",
		obtenerDireccion: function(){
		var self = this;
			console.log(self.pais);
		}
	}
	
};

persona.direccion.obtenerDireccion();

