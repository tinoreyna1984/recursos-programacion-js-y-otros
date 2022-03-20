'use strict'

/**
 * 
 * Uso de callbacks
 * 
 */

const suma = (a, b, cb) => {
    cb(a + b);
} // el tercer argumento es el callback, la funcion que determina el retorno de suma
suma(1, 2, (resultado) => {
    console.log(resultado);
})

// una forma mas clara:
const suma2 = (a, b, cb) => {
    cb(a + b);
}
const imprimir = a => console.log(a);
suma2(1, 2, imprimir);

// callback para uso asincrono:

const getData = cb => {
    setTimeout(() => 
        {cb(
            {nombre: 'Tino', 
            apellido: 'Reyna'}
        )},
    4000);
}
const imprimirData = data => console.log(data);

getData(imprimirData);

