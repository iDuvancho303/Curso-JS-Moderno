// Usando .querySelector
// puedes selecionar classes pero tiene la misma carateristica que
// getelementbyid... solo te va a devolver el primero que encuentre solo uno

const card = document.querySelector('.card') // usar punto para clase

console.log(card);

// solo nos devuelve el primero que encuentre ! MUY IMPORTANTE!
// a pesar de que hay mas.....


// podemos tener selectores especificos como en CSS
// igual de como se hace en CSS
const info = document.querySelector('.premium .info')

console.log(info);


// seleccionar el segundo elemento con clase "card" en la section "hospedaje'
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');

console.log(segundoCard);
// nos devuelve el segundo elemento que tiene una clase de 'Card'


// como seleccionar un elemento que tiene un 'id' en .querySlector
const formulario = document.querySelector('#formulario');

console.log(formulario);
// nos devuelve el primer elemento que tiene un 'id' de 'formulario
//acuerdate que en queryselector solo te va a devolver el primero que encuentre
// en orden de arriba a abajo


// seleccionar con los elementos de HTML
const navegacion = document.querySelector('nav')

console.log(navegacion);
// nos devuelve el primero elemento "nav" en el archivo html

