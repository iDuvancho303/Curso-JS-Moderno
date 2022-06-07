// Detener la ejecucion de un "if" con una funcion

const autenticado = true;

if(autenticado) {
    console.log('El usuario esta autenticado');
}


const puntaje = 500;

function revisarPuntaje() {

if(puntaje > 450) {
    console.log('Excelente puntaje');
    return;
}

if(puntaje > 400) {
    console.log('Muy buen puntaje');
    return;
}

}

revisarPuntaje();

// nos devuelve "Excelente puntaje"

