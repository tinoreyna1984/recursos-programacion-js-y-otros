'use strict'

// el tercer parametro es una funcion de callback
// la funcion en formato de flecha es una forma de funcion anonima

function sumame(numero1, numero2, muestra)
{
	var suma = numero1 + numero2;
	muestra(suma);
	return suma;
}

sumame(1, 2, suma => (console.log("La suma de los numeros ingresados es: ", suma)));
