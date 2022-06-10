// usando .every

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const resultado = carrito.every( producto => producto.precio < 1000);

console.log(resultado);

// estamos mirando si el precio de todos es menor a 1000
// nos devuelve "true" porque el precio de todos los productos si es menor a 1000
// cuando usas every todas las condiciones se tienen que cumplir