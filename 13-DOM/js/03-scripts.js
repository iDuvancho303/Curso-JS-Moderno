// seleccionar elementos por su id
// usando .getElementById

const formulario = document.getElementById('formulario');

console.log(formulario)
// nos trae el elemento que tiene un id de "formulario"


// que pasa si una id no existe?
const noExiste = document.getElementById('noExiste');

console.log(noExiste);
// nos devuelve "null"


// que pasa si tengo 2 formularios o 2 cosas con el mismo id?
// siempre te va a devolver el primero que encuentr por orden de arriba
// hacia abajo y solo te va a devolver un elemento