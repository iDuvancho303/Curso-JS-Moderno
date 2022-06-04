// objetos deontro de objetos
const producto = {
    nombre: 'monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m',
    }
}

console.log(producto); // accediendo a el objeto
console.log(producto.informacion);  // accediendo a el objeto dentro del objeto
console.log(producto.informacion.medida); // me devuelve 1m