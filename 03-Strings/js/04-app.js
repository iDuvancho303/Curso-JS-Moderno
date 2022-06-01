// methods que nos permitan eliminar el espacio blanco al principio y final del string
const producto = "              telefono de 20 pulgadas    ";

console.log(producto);
console.log(producto.length);

// eliminar espacio del inicio usando .trimStart
console.log(producto.trimStart());
// me devuelve el texto sin espacio en el principio

//eliminar espacio del final usando .trimEnd
console.log(producto.trimEnd());


// en JS se pueden juntar dos "methods" uno detras del otro
console.log(producto.trimStart().trimEnd());



