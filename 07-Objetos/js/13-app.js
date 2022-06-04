//
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
}

// usando (.keys) para saber si el objeto tiene informacion o no
// me devuelve las llaves que son:  nombre, precio y disponible
console.log(Object.keys(producto));

// usando (.values) para saber si el objeto tiene valores asignado
// me devuelve monitor de 20 pulgadas, 300 y true
console.log(Object.values(producto));

// usando (.entries) esta me retorna todo las llaves y los valores, todo junto
// me devueve
console.log(Object.entries(producto));