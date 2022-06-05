// la diferencia entre Function Expression y Declaration

// en "function declaration" se puede llamar la funcion antes
// de la funcion


//function declaration

sumar();

function sumar() {
    console.log(2 + 2);
}

// me devuelve 4 con function declaration



// function expression

sumar2();

const sumar2 = function() {
    console.log(3 + 3);
}

// no me devuelve nada con function expression


