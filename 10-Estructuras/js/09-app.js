// El operador ternario
// otra manera de revisar si una condicion se cumple

const autenticado = true;
const puedePagar = true;

console.log(autenticado ? 'Si esta autenticado' : 'No esta autenticado');

// nos devuelve "Si esta autenticado"
// fijarse en como incluye los dos posibles resultado de la condicion
// if = ? else =  :

// usando && and con el ternario
console.log(autenticado && puedePagar ? 'Si esta autenticado 2' : 'No esta autenticado');

// usando el || or con el ternario
console.log( autenticado || puedePagar ? 'Si esta autenticado 3' : 'No esta autenticado');
