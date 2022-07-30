function sumar (a: number, b: number) : number{
    return a+b;
}

console.log(sumar(1,2));

let sumarFlecha = (a: number, b: number) : number => {
    return a+b;
}

console.log(sumarFlecha(1,2));

let sumarFlecha2 = (a: number, b?: number) : number => {
    if (b === undefined)
        b = 0;
    return a+b;
}
console.log(sumarFlecha2(20));

let sumarFlecha3 = (a: number, b: number = 10) : number => {
    return a+b;
}

console.log(sumarFlecha3(20));


