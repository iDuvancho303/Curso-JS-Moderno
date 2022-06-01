// "method" para remplazar el texto de una cadena .replace
const producto = "telefono de 20 pulgadas ";

console.log(producto);
console.log(producto.replace('pulgadas', '"'));
// me devuelve "telefono de 20 pulgadas" "

// otro ejemplo modificando texto
console.log(producto.replace('telefono', 'androide inteligente'));


// .slice para cortar contenido en el texto
console.log(producto.slice(0, 8));
// me devuelve la palabra "telefono" solamente

// otro ejemplo cortando texto
console.log(producto.slice(0, 14));
// me devuelve "telefono de 20"

//alternative a slice usando .substring
//Cual es la differecia entre ambos?
// si le paso un numero mayor de inicio a el numero final slice no hace nada pero
//.substring si lo arregla o corrige por ti
console.log(producto.substring(0, 8));

// un ejemplo
const usuario = 'Duvan'

console.log(usuario.slice(3,0));
// me devuelve "empty string" .slice no lo puede corregir

console.log(usuario.substring(3, 0));
// me devuelve "duv" con .substring si me corrige mi error

