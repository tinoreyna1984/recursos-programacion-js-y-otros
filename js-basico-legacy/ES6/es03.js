'use strict'

/* Nuevas funcionalidades en ES6 */

// parametros REST

// solo puede haber un parametro REST precedido de puntos suspensivos
// siempre es colocado al final de los parametros declarados


function agregar_alumno(arr_alumno, ...alumnos){
	// el primer elemento es un arreglo fijo
	// el segundo elemento representa a otro arreglo conformado por diversos valores como parametros
	console.log(arguments);
	
	// lleno el arreglo de alumnos
	for(let i=0; i < alumnos.length; i++){
		arr_alumno.push(alumnos[i]);
	}
	
	return arr_alumno;
}

let alumnos_arr = ["Tino"];

let alumnos_arr2 = agregar_alumno(alumnos_arr, "Fabricio", "Eduardo");

console.log(alumnos_arr2);



// operador spread

// tiene la misma notacion que REST, tres puntos suspensivos, pero hace referencia a un arreglo de valores


let numeros = [10,20,30,100,1000];

let maximo = Math.max(...numeros);

console.log(maximo);

// puede romper con la referencia

let persona1 = { nombre: "Tino", edad: 36 };
// let persona2 = persona1; // pasara por referencia persona1 a persona2 y ambos resultaran iguales en el cambio de una de sus propiedades

let persona2 = {...persona1}; // ya no tiene el efecto del pase por referencia, los valores de persona1 se pasan por valor

persona2.nombre = "Fabricio";
persona2.edad = 30;

console.log(persona1);
console.log(persona2);


// paso de atributos con spread


let persona1 = { nombre: "Tino", edad: 36 };
let persona2 = { nombre: "Fabricio", edad: 35, direccion: "La Molina", trabaja: true };

persona1 = {
	...persona2,
	...persona1
}

console.log(persona1);
console.log(persona2);

