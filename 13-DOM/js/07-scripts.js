// cambiando el CSS con JS
const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red'
encabezado.style.fontSize = '11px';
encabezado.style.fontFamily = 'arial';
encabezado.style.textTransform = 'uppercase';

/* en JS los styles como background-color van en una sola palabra usando
el camel case, no es como en CSS que se tienen que separar por un guion */


// añadir una clase a un elemento que ya contiene una clase usando '.add'
const card = document.querySelector('card');
card.classList.add('silomonto');
console.log(card.classList);

//tambien se puede borrar una clase usando ".remove"
card.classList.remove('.card');

console.log(card.classList);