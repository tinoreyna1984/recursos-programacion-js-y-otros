
'use strict'

/**
 * try-catch: manejo de excepciones
 */


function division(a,b){
    try{
        if(b === 0)
            throw new Error('No se puede dividir por cero');
        else if (isNaN(a) || isNaN(b)){
            throw new Error('Los valores no son numericos');
        }
        else if(a >= b){
            return a/b;
        }
        else
            throw new Error('El primer entero debe ser mayor o igual que el segundo')
    }
    catch(e){
        console.error('Error: ' + e.message);
    }
    finally{
        console.log('Completado');
    }
}

console.log(division(1,0));


/* Concepto de asincronismo */

console.log("Tarea 1");
console.log("Tarea 2");
console.log("Tarea 3");
setTimeout(() => {console.log("Tarea 4");},5000)
console.log("Tarea 5");


