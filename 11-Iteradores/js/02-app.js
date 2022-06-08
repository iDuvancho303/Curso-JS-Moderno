// "break" y "continue" en un for loop
// no entendi muy bien cual es la diferencia ente break y continue rn un for loop

for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        console.log(`Este es el # ${i}`);
    }

    console.log(`Numero: ${i}`);
}

// me devuelve "Este es el # 5"

const carrito = [
    { nombre: 'Monitor', precio: 500},
    { nombre: 'Television', precio: 1000},
    { nombre: 'Tablet', precio: 450, descuento: true},
    { nombre: 'Audifonos', precio: 150},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 1200}
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} esta en descuento`);
        continue
    }

    console.log(carrito[i].nombre);
}