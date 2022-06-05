// eliminar elementos de un array usando .splice
const carrito = [];

// definir un producto
const producto1 = {
    nombre: 'tablet de 12 pulgadas',
    precio: 300,
}

const producto2 = {
    nombre: 'Telefono de 11 pulgadas',
    precio: 700,
}

const producto3 = {
    nombre: 'Teclado',
    Precio: 100,
}


carrito.push(producto1, producto2, producto3)


// eliminar el ultimo elemento de un arreglo
carrito.pop();
// me elimina el ultimo elemento de un arreglo
// en este caso me elimino producto3



console.table(carrito);