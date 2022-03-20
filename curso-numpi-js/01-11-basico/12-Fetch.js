'use strict'

// fetch (ajax) y peticiones a API REST

var usuarios = [];
var div_usuarios = document.querySelector('#usuarios');
var div_usuario = document.querySelector('#usuario');

function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}

getUsuarios()
	.then( data => data.json() )
	.then( users => {
		listadoUsuarios(users.data);
		return getUsuario();
	})
	.then( data => data.json() )
	.then( usuario => {
		mostrarUsuario(usuario.data);
	});

function getUsuario(){
	return fetch('https://reqres.in/api/users/2');
}

function listadoUsuarios(usuarios){
	usuarios.map((user, i) => {
		let nombre = document.createElement('h3');
		
		nombre.innerHTML = i+1 + ' - ' + user.first_name + ' ' + user.last_name;
		
		// appendChild permite agregar contenido al tag HTML requerido
		div_usuarios.appendChild(nombre);
		
		// quita el mensaje de "cargando..."
		document.querySelector(".cargando").style.display = 'none';
	});
}

function mostrarUsuario(usuario){
	let nombre = document.createElement('h3');
		
	nombre.innerHTML = 'Usuario: ' + usuario.first_name + ' ' + usuario.last_name;
	
	// appendChild permite agregar contenido al tag HTML requerido
	div_usuario.appendChild(nombre);
	
	// quita el mensaje de "cargando..."
	document.querySelector("#usuario .cargando").style.display = 'none';
}

