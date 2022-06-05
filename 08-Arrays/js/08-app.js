// destructuring arrays
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}


//destructuring 
const {nombre} = producto;
console.log(nombre);
// me devuelve "monitor de 20 pulgadas"



//destructuring con arrays
const numeros = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = numeros;
console.log(tercero);
// me devuelve 30

// accerder a uno en especifico
const [, , , , quinto] = numeros;
console.log(quinto);
// se usa comas para dejar los otros en blanco
//estoy haciendo a el numero quinto so por ende me devuelve 50