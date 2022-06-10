// usando el spread operator

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// spread operator con arreglo de indices "Julio"
const meses2 = [...meses, 'Julio'];

console.log(meses2);
// me tiene que devolver el string de meses + 'Julio'

// de esta forma no me modifica el array original "meses"


// usar spread operator con un arreglo con objetos

const producto = {nombre: 'Disco Duro', precio: 500};

const carrito2 = [...carrito, producto]; // para objetos no se usando los 3 puntos

console.log(carrito2);
// nos devuelve  todo lo de carrito y carrito2

