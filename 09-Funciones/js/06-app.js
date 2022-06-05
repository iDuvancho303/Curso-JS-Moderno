// Parametros por default
// si no hay argumentos presentes cuando mandas a llamar a la funcion
// puede darle un valor a los parametros  para que no aparezca undefined

function saludar(nombre, apellido = 'No Data') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Duvan',);
// nos devuelve "Hola Duvan No Data"
// si no hay un argumento entonces de ejecuta el parametro por default
// en este ejemplo es el segundo parametro y su valor es 'No Data'



// otro ejemplo - 
function saludar2(nombre = 'Desconocido', apellido) {
    console.log(`Yo soy ${nombre} ${apellido}`);
}

saludar2();
// nos devuelve "Yo soy Deconocido undefined"