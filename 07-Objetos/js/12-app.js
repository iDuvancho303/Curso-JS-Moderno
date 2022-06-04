// el "object constructor"


// este es un object literal (este se usa mas)
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostraInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}



// este es un object constructor
function producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.dipsonible = true;
}

const producto2 = new producto('monitor de 24 pulgadas', 500)
console.log(producto2);

