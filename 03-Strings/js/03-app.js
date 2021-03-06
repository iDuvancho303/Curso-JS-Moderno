//concatenar un string y template strings
const producto = "telefono de 20 pulgadas ";
const precio = '30 USD'

console.log(producto.concat(precio));
// me devuelve "telefono de 20 pulgadas"

// tambien puedes hacer esto
// concatenar un string
console.log(producto.concat('esta en rebaja'));
// me devuelve "telefono de 20 pulgadas esta en rebaja"

// otra forma de concatenar es usando el simbolo de suma
console.log(producto + precio);
// tambien le puedes añadir texto
console.log(producto + precio + ' Wow! que bien!');
// me devuelve "telefono de 20 pulgadas 30 USD Wow! que bien!"

// otra forma de concatenar usando +
console.log('el producto ' + producto + 'tiene un precio actualmente de ' + precio);
// me devuelve "el producto telefono de 20 pulgadas tiene un precio actualmente de 30 USD"




// concatenando usando "template strings" que es una version nueva de concatenar
console.log(`el producto ${producto}, tiene un precio de ${precio}`);
// me devuelve "el producto telefono de 20 pulgadas, tiene un precio de 30 USD"


