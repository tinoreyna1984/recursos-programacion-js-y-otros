'use strict'

/**
 * Funciones para manipulacion de arreglos
 * (muy usadas en JS)
 */

// forEach: abrevia el uso del for clasico para recorrer items

var letras = ['a', 'b', 'c', 'd', 'e'];

/* 
// Forma clasica:
for(let i = 0; i < letras.length; i++)
{
    console.log(letras[i]);
} 
*/
// El mismo resultado con forEach:
letras.forEach(item => {
    console.log(item);
});

// Funciones push, shift y pop:

var letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras);

// push: agrega un item al final del arreglo
letras.push('f');
console.log(letras);

// shift: elimina el primer item del arreglo, siendo este valor el retorno de la funcion

var letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras);
var a = letras.shift();
console.log(a);
console.log(letras);

// pop: elimina el ultimo item del arreglo, siendo este valor el retorno de la funcion

var letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras);
var e = letras.pop();
console.log(e);
console.log(letras);


/* map: transforma los elementos de un arreglo segun una funcion que es declarada en el parametro
Devuelve un nuevo arreglo con la misma cantidad que el arreglo original, pero con los valores
transformados */

var valores = [1,2,3,4,5];

var multPor2 = a => a*2; // funcion que pasara por parametro de map

var nuevosValores = valores.map(multPor2);
console.log(valores);
console.log(nuevosValores);

var nombres = ['Pepe', 'Lucho', 'Lolo'];
holaNombres = nombres.map(
    function(nombre){
        return 'Hola, ' + nombre;
    }
);
console.log(nombres);
console.log(holaNombres);

// para el caso de objetos

var productos = [
    {nombre: 'camiseta', precio: 15},
    {nombre: 'zapatos', precio: 10},
    {nombre: 'pantalones', precio: 20},
]

var impuesto = productos.map(
    function(producto){
        return {
            ...producto,
            impuesto: producto.precio*0.15
        }
    }
);

// El operador de tres puntos toma las propiedades existentes del objeto.
// El retorno debe ser un nuevo objeto, esto para no modificar deliberadamente
// el objeto que entra como parametro y ya existe en memoria

console.log(productos);
console.log(impuesto);

// filter: selecciona los elementos que cumplen con una condicion dada
// en el parametro de entrada y devuelve un arreglo con dichos elementos

var estudiantes = [
    {nombre: 'Pepe', edad: 19, matriculado: false},
    {nombre: 'Mario', edad: 22, matriculado: true},
    {nombre: 'Lola', edad: 25, matriculado: false},
    {nombre: 'Tito', edad: 20, matriculado: true},
    {nombre: 'Milena', edad: 20, matriculado: false},
];

var filtEdad = estudiantes.filter( est => est.edad == 20); // devuelve quienes tengan 20 años
console.log(estudiantes);
console.log(filtEdad);

var estudiantes = [
    {nombre: 'Pepe', edad: 19, matriculado: false},
    {nombre: 'Mario', edad: 22, matriculado: true},
    {nombre: 'Lola', edad: 25, matriculado: false},
    {nombre: 'Tito', edad: 20, matriculado: true},
    {nombre: 'Milena', edad: 20, matriculado: false},
];

// devuelve quienes tengan 20 años y cuyo nombre tenga mas de 4 caracteres
var filtEst = estudiantes.filter( est => est.edad == 20 && est.nombre.length > 4 );
console.log(estudiantes);
console.log(filtEst);

// reduce: reduce un arreglo a un solo valor
/**
 * reduce(funcion, valor inicial para funcion)
 */
var calificaciones = [3,5,9,10,10];
var suma = calificaciones.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(calificaciones);
console.log(suma);

// para el uso de objetos:

// ejemplo: agrupar valores repitentes
var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];
var agrupar = edades.reduce((contador, edad) => {
    if(!contador[edad]){
        contador[edad] = 1;
    }
    else{
        contador[edad]++;
    }
    return contador;
}, {});
console.log(edades);
console.log(agrupar);

// ejemplo: total de ventas
var ventas = [
    {nombre: 'camiseta', precio: 10, cantVenta: 20},
    {nombre: 'zapatillas', precio: 80, cantVenta: 30},
    {nombre: 'pantalones', precio: 30, cantVenta: 45}
]

var totalVenta = ventas.reduce(
    (acumulador, producto) => {
        let total = producto.precio * producto.cantVenta;
        acumulador[producto.nombre] = `USD ${total}`;
        return acumulador;
    }
,{});

console.log(ventas);
console.log(totalVenta);


// listar alumnos matriculados y no matriculados
var estudiantes = [
    {nombre: 'Pepe', edad: 19, matriculado: false},
    {nombre: 'Mario', edad: 22, matriculado: true},
    {nombre: 'Lola', edad: 25, matriculado: false},
    {nombre: 'Tito', edad: 20, matriculado: true},
    {nombre: 'Milena', edad: 20, matriculado: false},
];

var listaMat = estudiantes
    .map( estudiante => estudiante.matriculado )
    .reduce((acumulador, item) => {
        if(item)
            acumulador.matriculados++;
        else
            acumulador.noMatriculados++;
        return acumulador;
    }
    ,{matriculados: 0, noMatriculados: 0});;

/*
Equivale a:

var arregloEst = estudiantes.map( estudiante => estudiante.matriculado );
console.log(arregloEst);
var listaMat = arregloEst.reduce((acumulador, item) => {
    if(item)
        acumulador.matriculados++;
    else
        acumulador.noMatriculados++;
    return acumulador;
}
,{matriculados: 0, noMatriculados: 0});
*/

console.log(listaMat);

/**
 * some y every
 * some: devuelve true si al menos un elemento de un arreglo cumple con una condicion dada en el parametro
 * every: devuelve true si todos los elementos de un arreglo cumplen con una condicion dada en el parametro
 */

var numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);
console.log(numeros.some( x => x % 2 == 0 )); // true
console.log(numeros.every( x => x < 20 )); // true

/**
 * find y findIndex
 * find: devuelve el primer elemento del arreglo que cumpla la condicion dada por parametro
 * findIndex: es similar a find, pero devuelve la posicion de ese mismo elemento
 */
 var estudiantes = [
    {id: 1, nombre: 'Pepe', edad: 19, matriculado: false},
    {id: 2, nombre: 'Mario', edad: 22, matriculado: true},
    {id: 3, nombre: 'Lola', edad: 25, matriculado: false},
    {id: 4, nombre: 'Tito', edad: 20, matriculado: true},
    {id: 5, nombre: 'Milena', edad: 20, matriculado: false},
];
console.log(estudiantes);
console.log(estudiantes.find(est => est.id === 1)); // si hay mas de uno, toma solo el primero
console.log(estudiantes.findIndex(est => est.id === 1)); // 0

// includes: funcion que devuelve un booleano despues de buscar un elemento especifico en un arreglo

var mascotas = ['perro', 'gato', 'conejo'];
console.log(mascotas);
console.log(mascotas.includes('perro')); // true
console.log(mascotas.includes('hamster')); // false

var valores = [1,2,3,4,5];
console.log(valores);
console.log(valores.includes(3)); // true
console.log(valores.includes(9)); // false

// uso en cadenas de texto
console.log('Javascript'.includes('a')); // true
console.log('Javascript'.includes('pt')); // true
console.log('Javascript'.includes('o')); // false

// en un objeto
function buscador(parametro){
    let clientes = [
        {id: 1, nombre: 'Pepe'},
        {id: 2, nombre: 'Mario'},
        {id: 3, nombre: 'Lola'},
        {id: 4, nombre: 'Tito'},
        {id: 5, nombre: 'Milena'},
    ];
    return clientes.filter(cliente => cliente.nombre.includes(parametro))
}
console.log(buscador('o'));

// join: concatena elementos con un separador que se recibe por parametro (por defecto, es una coma)
var letras = ['a', 'b', 'c', 'd', 'e'];
console.log(letras.join()); // a,b,c,d,e
console.log(letras.join('')); // abcde
console.log(letras.join('-')); // a-b-c-d-e

// une todos los clientes en una cadena desde un arreglo de objetos
var clientes = [
    {id: 1, nombre: 'Pepe'},
    {id: 2, nombre: 'Mario'},
    {id: 3, nombre: 'Lola'},
    {id: 4, nombre: 'Tito'},
    {id: 5, nombre: 'Milena'},
];
listCli = clientes.map( item => item.nombre ).join();
console.log(listCli);

// generacion de arreglos de los registros como un csv
var clientes = [
    {id: 1, nombre: 'Pepe', edad: 19},
    {id: 2, nombre: 'Mario', edad: 22},
    {id: 3, nombre: 'Lola', edad: 25},
    {id: 4, nombre: 'Tito', edad: 20},
    {id: 5, nombre: 'Milena', edad: 20},
];

function csvGen(array, separator = ','){
    let headers = Object.keys(array[0]).join(separator);
    let data = array.map(element => Object.values(element).join(separator)) ;
    console.log(headers);
    data.forEach(item => console.log(item));
}
csvGen(clientes);

// concat: funcion que concatena un arreglo con otro que es recibido como parametro.
// La funcion devuelve el nuevo arreglo que resulta de dicha concatenacion.

var arr1 = ['a', 'b', 'c', 'd', 'e'];
var arr2 = ['f', 'g', 'h', 'i', 'j'];

console.log(arr1.concat(arr2)); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// sort: ordena los elementos de un arreglo con base en el codigo ASCII*. Devuelve el arreglo ordenado.
// *: no ordena conforme al tipo de dato
// NOTA: puede recibir como parametro el criterio de orden

var num = [9,8,7,6,5,4,3,2,1,0];
console.log(num);
console.log(num.sort());

var genmusic = ['rock', 'pop', 'salsa', 'bolero', 'electronica'];
console.log(genmusic);
console.log(genmusic.sort());

var num2 = [100, 12, 9, 5, 7, 2000, 30];
console.log(num2);
console.log(num2.sort()); // devuelve: [100, 12, 2000, 30, 5, 7, 9], no en el orden esperado numericamente
num3 = num2.sort( (a, b) => a - b );
console.log(num3); // devuelve el arreglo ordenado numericamente

// splice: cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letras);
letras.splice(2);
console.log(letras); // devuelve [ 'a', 'b' ]

var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letras);
letras.splice(2,2);
console.log(letras); // devuelve [ 'a', 'b', 'e', 'f' ]

var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letras);
letras.splice(2, 2, 'g');
console.log(letras); // devuelve [ 'a', 'b', 'g', 'e', 'f' ]

var letras = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letras);
letras.splice(2, 2, 'g', 'h');
console.log(letras); // devuelve [ 'a', 'b', 'g', 'h', 'e', 'f' ]

// slice: genera un arreglo desde una posicion inicial hasta una posicion anterior a la final
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
console.log(nombres.slice(1)); // devuelve [ 'Pedro', 'Miguel', 'Ana', 'Vanesa' ]
console.log(nombres.slice(1, 3)); // devuelve [ 'Pedro', 'Miguel' ]


