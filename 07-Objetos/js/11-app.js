// funciones en objetos y acceder a sus valores
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    mostraInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostraInfo();

//aqui aprendimos sobre (this.) para selecionar una llave en especifico dentro 
//de el objeto