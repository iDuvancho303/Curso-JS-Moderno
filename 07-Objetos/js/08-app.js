// congelar un objeto para que no se pueda modificar
"use strict" // estudiar mas sobre esto

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto);  // aqui solo aprendi como usar este objeto

producto.disponible = false;
producto.imagen = "imagen.jpg";

console.log(producto);

console.log(Object.isFrozen(producto));