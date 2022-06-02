// como acceder a los valores de un objeto
const producto = {
    nombre: 'monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

console.log(producto);

// accediendo a un valor en concreto
console.log(producto.nombre);
// nos devuelve "monitor de 20 pulgadas"

//tambien puede accede a un valor de esta manera
console.log(producto['disponible']);
// nos devuelve "true"