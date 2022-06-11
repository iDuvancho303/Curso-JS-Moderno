// usando .querySelectorAll
/* la diferencia principal entre .querySelector and .querySelectorAll
es que .querySelector solo regresa el primer elemento con la clase o "id"
especificado y .querySelectorAll va a retornarte todos los elementos que
cumplan la condicion */

const card = document.querySelectorAll('.card');

console.log(card);
// me devuelve todos los elementos que tienen la clase 'card'


// si un elemento no existe
const noExiste = document.querySelectorAll('.noExiste');

console.log(noExiste);
// nos devuelve no nodelist que esta vacio
