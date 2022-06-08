// usando .reduce
// suponer que le tenemos que decir al usuario cuanto tiene que pagar

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con un forEach
let total = 0;

carrito.forEach(producto => total += producto.precio);

console.log(total);

// con un .reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio);