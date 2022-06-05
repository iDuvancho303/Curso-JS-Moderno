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
    precio: 100,
}


carrito.push(producto1, producto2, producto3)


// eliminar el ultimo elemento de un arreglo
carrito.pop();
// me elimina el ultimo elemento de un arreglo
// en este caso me elimino producto3



console.table(carrito);

// eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);
// en este caso me elimino el producto1 del arreglo


// eliminar un elemento del medio, ni el primero ni el ultimo usando .splice
carrito.splice(0, 1);
console.table(carrito);
//estoy eliminando el array en la posicion 0 
//si quiero eliminar los arrays que siguen sigo subiendo el segundo numero
