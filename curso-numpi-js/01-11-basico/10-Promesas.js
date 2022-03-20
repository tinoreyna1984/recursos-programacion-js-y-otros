'use strict'

/**
 * Promesas: asegura un funcionamiento de un callback en un proceso asincrono al
 * detectar un error y responder ante el
 */

// control del error segun un flag condicionante

var flag = true;
const getDataOld = (cb, errHand) => {
    if(flag)
    {
        setTimeout(() => 
        {cb(
            {nombre: 'Tino', 
            apellido: 'Reyna'}
        )}, 4000);
    }
    else{
        errHand('Error al imprimir data')
    }
}
const imprimirData = data => console.log(data);
const errorHandler = error => console.error(error);
getDataOld(imprimirData, errorHandler);

/**
 * Una promesa es un objeto que maneja dos callbacks: uno en caso de que
 * el proceso es exitoso y otra que muestre error
 */

const getData = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => 
            {resolve({nombre: 'Tino', 
            apellido: 'Reyna'});}
        , 4000);
    }
    else{
        reject('Error al imprimir data');
    }
});

/*console.log('Inicio de proceso');
getData(false)
    .then(data => console.log(data))
    .catch(error => console.error(error));
console.log('Fin de proceso');*/

// encadenando mas promesas antes del catch

const getData2 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => 
            {resolve({nombre: 'Gabriela', 
            apellido: 'Lorentzen'});}
        , 4000);
    }
    else{
        reject('Error al imprimir data 2');
    }
});

console.log('Inicio de proceso');
getData(false)
    .then(
        data => {console.log(data);
        return getData2(false);})
    .then(data => console.log(data)) // esta asociado a getData2
    .catch(error => console.error(error));
console.log('Fin de proceso');

// async-await: palabras claves para realizar trabajos asincronos con promesas

const getData3 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => 
            {resolve({nombre: 'Tino', 
            apellido: 'Reyna'});}
        , 4000);
    }
    else{
        reject('Error al imprimir data 3');
    }
});

const programa = async () => {
    let resultado = await getData3(false);
    console.log(resultado);
}

programa();

// para promesas multiples

const getData4 = (error) => new Promise((resolve, reject) => {
    if(!error){
        setTimeout(() => 
            {resolve({nombre: 'Gabriela', 
            apellido: 'Lorentzen'});}
        , 4000);
    }
    else{
        reject('Error al imprimir data 4');
    }
});

const programa2 = async () => {
    try {
        let resultado = await getData3(false);
        let resultado2 = await getData4(true);
        console.log(resultado);
        console.log(resultado2);
    }
    catch(e){
        console.log('Excepcion: ' + e);
    }
}

programa2();
