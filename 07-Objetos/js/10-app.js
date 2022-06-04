// copiar, unir dos objetos dentro de uno solo
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '20kg',
    medida: '1m',
}


const resultado = {...producto, ...medidas}

console.log(resultado);