// traversing el DOM
// ir recorriendo el DOM...

/*const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.children);
// children me va enlistat elementos reales
console.log(navegacion.childNodes);
// childnodes me va a enlistar los espacios en blanco
*/

// vamos a seleccionar algo en especifico dentro de un container 
const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo headings desde el DOM D';

console.log(card.children[1].children[1].textContent);

// aqui vamos a selecionar la imagen dentro del mismo container que el ejemplo de antes
card.children[0].src = 'img/hacer4.jpg';
console.log(card.children[0]);

//traversing de hijo a padre usando .parentElement
console.log(card.parentElement.parentElement.parentElement)