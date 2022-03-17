/* Uso de librerías Node JS en servidor */

const os = require('os');
const file = require("fs");

// Sistema operativo
console.log("SO: " + os.version);
console.log("Release: " + os.release);
console.log("Arquitectura: " + os.arch);
console.log("Plataforma: " + os.platform);

// Manejo de archivos

// crear
file.writeFile("./data.txt", "hola mundo\nhecho con Node JS", (err) => {
	if(err){
		console.log(err);
	}
	else{
		console.log("Archivo creado.")
	}
});



