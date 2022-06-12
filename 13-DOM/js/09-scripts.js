// eliminar elementos del DOM usando .remove
const primerEnlace = document.querySelector('a');

primerEnlace.remove();

console.log(primerEnlace);

// eliminar desde el padre
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children); // para saber en que posicion esta lo que quieres borrar

navegacion.removeChild(navegacion.children[2]);