//  .forEach para iterar un array
const carrito = [
    {nombre: 'Tablet', precio: 500},
    {nombre: 'cellphone', precio: 900},
    {nombre: 'keyboard', precio: 100},
    {nombre: 'mouse', precio: 90},
    {nombre: 'headphones', precio: 250},
]

// usando solo for
for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);  //accediendo a el nombre
}

// usando el methodo .foreach
carrito.forEach(function(producto) {
    console.log(`${producto.nombre} - precio: ${producto.precio}`);
})