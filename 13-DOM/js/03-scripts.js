// seleccionar elementos por su id
// usando .getElementById

const formulario = document.getElementById('formulario');

console.log(formulario)
// nos trae el elemento que tiene un id de "formulario"


// que pasa si una id no existe?
const noExiste = document.getElementById('noExiste');

console.log(noExiste);
// nos devuelve "null"

