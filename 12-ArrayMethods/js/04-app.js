// usando .filter

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado 

resultado = carrito.filter( producto =>producto.precio > 400);

resultado = carrito.filter( producto => producto.precio < 600 );

resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');


console.log(resultado);

// con filter nos crea un nuevo array con la condicion que estas pasando
// nos devuelve los productos que estan por encima de 400 en este caso son monitor y celular
  