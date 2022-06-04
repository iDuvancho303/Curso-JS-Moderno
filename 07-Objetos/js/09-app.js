// sellar un objeto usando (.seal)para que no se puedan agregar o eliminar propiedades
// pero si se pueden modificar las existentes

"use strict" // estudiar mas sobre esto

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

// sella un objeto
// en este caso "disponible" si puede pasar de "true" a "false"
Object.seal(producto);  // aqui solo aprendi como usar este objeto

producto.disponible = false;
// producto.imagen = "imagen.jpg"; <- este copdigo no sirve porque no se puede anadir 

console.log(producto);

// mirar si un objeto esta sellado o no
console.log(Object.isSealed(producto));

