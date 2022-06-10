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

const meses2 = [...meses, 'Julio'];

console.log(meses2);
// me tiene que devolver el string de meses + 'Julio'
