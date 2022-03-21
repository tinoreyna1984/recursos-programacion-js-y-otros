'use strict'

// consola:

console.log('Esto es util para el debug de seguimiento');
console.warn('Aqui lanzo una especie de advertencia');
console.info('Permite que este rastreo sea informativo');
console.error('Aqui lanzo un mensaje de error');

var objeto = {
	nombre: "Tino",
	edad: 36,
	casado: false,
	// objeto dentro de objeto
	objetoHijo: {
		nombre: "Tinito"
	}
};

console.log(objeto);
console.log(objeto.nombre);
console.log(objeto.objetoHijo.nombre);
