// este es un string usando el "Method" de .length
const producto = "telefono de 20 pulgadas";

console.log(producto);         // me devuelve = "telefono de 20 pulgadas"
console.log(producto.length);  // me devuelve = 24 

// usando el "Method" de .indexOf - sirve para buscar una letra o palabra en especifico
console.log(producto.indexOf('de')); 
// si el string "producto" tiene la palabrar "de" en algun lugar, nos dira la posicion
// en este lugar serila en la posicion, en la letra numero 9


// usando el "method" de .includes - que es lo mismo que .indexOf
// sirven igual, cual se usara mas ?
console.log(producto.includes('pulgadas'));
// en este caso te devuelve "true"




