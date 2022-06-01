// usando methos .repeat y .split
const producto = "telefono de 20 pulgadas";


// usando el method .repeat
const texto = 'En promocion'.repeat();

console.log(texto);
// me devuelve "en promocion en promocion en promocion en promocion"

// tambien se puede hacer esto
console.log(`${producto} ${texto}`);
// me devuelve "telefono de 20 pulgadas en promocion en promocion en promocion"


//.split se usa para dividir un string
const actividad = "Estoy aprendiendo JS moderno";

console.log(actividad.split(" "));
// me devuelve "estoy" "aprendiendo" "JS" "moderno"

// otro ejemplo usando .split
const hobbies = 'leer, patinar, cantar, bailar';

console.log(hobbies.split(","));
// me devuelve "leer" "patinar" "cantar" "bailar"




