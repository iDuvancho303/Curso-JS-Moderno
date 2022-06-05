// agregar nuevos elementos al final o al iniciode un array
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio'];

//agregar nuevos valores a el final del array. usando .push
meses.push('Deciembre');
// me devuelve todo el array incluyendo el nuevo valor añadido a el final "Diciembre"


console.table(meses);



// otro ejemplo
// Carrito de compras
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



carrito.push(producto1, producto2);
// añadir elementos a el principio del array usando .unshift
carrito.unshift(producto3);
console.table(carrito);