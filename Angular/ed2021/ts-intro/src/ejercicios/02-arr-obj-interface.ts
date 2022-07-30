/*
    ===== Código de TypeScript =====
*/

let habilidades : string[] = ['programar', 'probar', 'comer', 'dormir'];

console.log(habilidades);

interface Personaje {
    nombre : string,
    hp : number,
    habilidades : string[],
    puebloNatal? : string
}

let personaje : Personaje = {
    nombre : 'Link',
    hp : 40,
    habilidades : ['melee', 'correr', 'arqueria']
}

personaje.puebloNatal = 'Hyrule';

console.table(personaje);

