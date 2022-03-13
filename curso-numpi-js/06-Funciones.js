'use strict'

/**
 * Funciones:
 * - Clasica.
 * - Anonima.
 * - Operador flecha
 */

// funcion clasica

function suma(a = 0,b = 0)
{
    // muchas instrucciones
    return(a+b);
}
console.log(suma(1,2));

// funcion anonima

var sumaDos = function(a = 0,b = 0)
{
    // muchas instrucciones
    return(a+b);
}
console.log(sumaDos(1,2));

// notacion flecha

var sumaTres = (a = 0,b = 0) => (a+b);
console.log(sumaTres(1,2));

var algoritmo = (a, b, c, d) => {
    if(a > b && b > c){
        return ((a-b) + (b-c));
    }
    else if (a > c && c > d){
        return ((a-c)*(c-d));
    }
    else{
        return a+b+c+d;
    }
}
console.log(algoritmo(3,2,4,7));



