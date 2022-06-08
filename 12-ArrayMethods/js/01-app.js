// este es solo un arreglo de indices
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


// este es un arreglo de objetos
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]



// comprobar si un valor existe en un arreglo
// estamos comprobando si "Enero" si existe dentro del array

meses.forEach( mes => {
    if( mes === 'Enero') {
        console.log("Enero si existe");
    }

});

// nos devuelve "enero si existe"

// otra manera de mirar si existe Enero usando .includes

const resultado = meses.includes('Enero');
console.log(resultado);

// nos devuelve "true" por que si existe ese valor
// ".includes" solo funciona en un arreglo de indices
// para un arreglo de objetos se tiene que usar ".some"

// en un arreglo de objetos se utiliza -- usando ".some" en un array de objetos
const existe = carrito.some( producto => {
    return producto.nombre === 'Celular';
})

console.log(existe);

// nos devuelve "true" porque celular si existe dentro del array con objetos
