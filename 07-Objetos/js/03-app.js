const producto = {
    nombre: 'monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

// agregar nuevos valores al objeto
producto.imagen = 'imagen.jpg';
// nos anade "imagen.jpg" a la lista de valores

// eliminar un valor de la lista de objetos
delete producto.nombre;
// nos elimina "nombre" de la lista de valores

console.log(producto);
