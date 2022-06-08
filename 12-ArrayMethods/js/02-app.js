// usando .findIndex para saber en que posicion se encuentra un elemento


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

// pasa saber en que posicion se encuentra Abril
meses.forEach((mes, i) => {
    if(mes === 'Abril') {
        console.log(`Encontrado en el indice: ${i}`);
    }
});

// nos devuelve "emcontrado en el indice: 3"


// encontrar el indice de Mayo usando ".findIndex" 
const indice = meses.findIndex( (mes, i) => {
    if(mes === 'Mayo') {
        console.log(`Encontrado en el indice ${i}`);
    }
})


// encontrar un indice de un arreglo de objetos
const indice2 = carrito.findIndex( producto => producto.precio === 100);
console.log(indice2);

// nos devuelve "1" se encuentra en la posicion 1