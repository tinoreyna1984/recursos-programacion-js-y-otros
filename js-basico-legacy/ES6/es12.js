'use strict'

/* ES7: await-async */


const empleados = [
	{id : 1, nombre : "Tino"},
	{id : 2, nombre : "Gabriela"},
	{id : 3, nombre : "Maria"}
];

const salarios = [
	{id : 1, salario : 1000},
	{id : 2, salario : 2000}
];


const getEmpleado = async( id ) => {
	
	const empleadoDB = empleados.find( empleado => empleado.id === id ); // busca empleado segun la tabla
	
	if(!empleadoDB){
		throw new Error(`No existe empleado con el id ${id}`);
	}
	else{
		return empleadoDB;
	}
	
};

const getSalario = async(empleado) => {
	
		
	const salarioDB = salarios.find( salario => salario.id === empleado.id ); // busca salario segun la tabla
	
	if(!salarioDB){
		throw new Error(`No existe salario para el empleado ${empleado.nombre}`);
	}
	else{
		return {
				id : empleado.id,
				nombre : empleado.nombre,
				salario : salarioDB.salario
		};
	}
	
};

const getInformacion = async(id) => {
	const emp = await getEmpleado(id);
	const sal = await getSalario(emp);
	
	return `${emp.nombre} tiene el salario de ${sal.salario}`;
};

getInformacion(1).then(console.log)
.catch((error) => console.log(error));




