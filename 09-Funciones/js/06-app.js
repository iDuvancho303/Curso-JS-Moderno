// Parametros por default
// si no es necesario o esta presente un parametro

function saludar(nombre, apellido = 'No Data') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Duvan',);
// nos devuelve "Hola Duvan No Data"
// si no hay un argumento entonces de ejecuta el parametro por default
// en este ejemplo es el segundo parametro y su valor es 'No Data'


function saludar2(nombre = 'Desconocido', apellido) {
    console.log(`Yo soy ${nombre} ${apellido}`);
}

saludar2('','Flores');