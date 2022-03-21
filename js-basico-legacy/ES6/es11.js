'use strict'

/* Promesas */


let promesa = new Promise((resolve, reject) => {
	let number = Math.floor(Math.random() * 10); // valor aleatorio

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('No esperaba un numero menor o igual a 5')),
		1300
	); // funcion anonima que usa un if abreviado segun el valor del numero
});

promesa
	.then(number => console.log("Obtuve " + number)) // then llama al resolve
	.catch(error => console.error(error)); // catch llama al reject


// caso practico de promesas

const empleados = [
	{id : 1, nombre : "Tino"},
	{id : 2, nombre : "Gabriela"},
	{id : 3, nombre : "Maria"}
];

const salarios = [
	{id : 1, salario : 1000},
	{id : 2, salario : 2000}
];

const getEmpleado = ( id ) => {
	
	return new Promise( (resolve, reject) => {
		
		const empleadoDB = empleados.find( empleado => empleado.id === id ); // busca empleado segun la tabla
		
		if(!empleadoDB){
			reject(`No existe empleado con el id ${id}`);
		}
		else{
			resolve(empleadoDB);
		}
		
	});
};

const getSalario = (empleado) => {
	
	return new Promise( (resolve, reject) => {
		
		const salarioDB = salarios.find( salario => salario.id === empleado.id ); // busca empleado segun la tabla
		
		if(!salarioDB){
			reject(`No existe salario para el empleado ${empleado.nombre}`);
		}
		else{
			resolve(
				{
					id : empleado.id,
					nombre : empleado.nombre,
					salario : salarioDB.salario
				}
			);
		}
		
	});
	
};

getEmpleado(1)
	.then( getSalario )
	.then( console.log )
	.catch((error) => console.log(error));
	

