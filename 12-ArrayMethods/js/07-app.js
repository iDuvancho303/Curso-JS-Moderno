// usando .concat
// se usa para unir arrays o funciones

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const meses2 = ['Junio', 'Julio'];
const meses3 = ['Mayo']

// concatenando los dos primeros arrays
const resultado = meses.concat(meses2);

console.log(resultado);
// me devuelve Array(6) [ "Enero", "Febrero", "Marzo", "Abril", "Junio", "Julio" ]


// concatenando 3 arrays
const resultado2 = meses.concat(meses3, meses2);

console.log(resultado2);
// me devuelve Array(7) [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio" ]