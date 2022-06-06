// Arrow function en un ForEach y un .map
const carrito = [
    {nombre: 'Tablet', precio: 500},
    {nombre: 'cellphone', precio: 900},
    {nombre: 'keyboard', precio: 100},
    {nombre: 'mouse', precio: 90},
    {nombre: 'headphones', precio: 250},
]

const nuevoArreglo = carrito.map((producto) => {
    return `${producto.nombre} - ${producto.precio}`;
})

console.log(nuevoArreglo);

const nuevoArreglo2 = carrito.forEach((producto) => {
    console.log(`${producto.nombre} - ${producto.precio}`);
})

console.log(nuevoArreglo2);