// el "object constructor"


// este es un object literal
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostraInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

// este es un object constructor


