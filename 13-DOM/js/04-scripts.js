// Usando .querySelector
// puedes seleciionar classes pero tiene la misma carateristica que
// getelementbyid... solo te va a devolver el primero que encuentre solo uno

const card = document.querySelector('.card') // usar punto para clase

console.log(card);

// solo nos devuelve el primero que encuentre ! MUY IMPORTANTE!
// a pesar de que hay mas.....


// podemos tener selectores especificos como en CSS
// igual de como se hace en CSS
const info = document.querySelector('.premium .info')
