// buenas practicas a la hora de comparar un boolean
const autenticado = true;

if(autenticado === true) {
    console.log('Si puedes ver Netflix')
} else {
    console.log('No puedes ver television');
}
// nos devuelve "Si puedes ver Netflix"


// operador ternario 
console.log( autenticado ? 'Si esta autenticado' : 'No esta autenticado');
// nos devuelve "Si esta autenticado" porque el valor de el boolean es true