// mayor o igual y else if

// usando else if
const dinero = 200;
const totalPagar = 300;
const tarjeta = true;
const cheque = true;

if(dinero > totalPagar) {
    console.log('Si podemos pagar...');
} else if (tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta');
} else if (cheque) {
    console.log('Si tengo un cheque para pagar...')
} else {
    console.log('No tienes suficiente dinero amigo...');
}

// nos devuelve "si puedi pagar porque solo tengo la tarjeta"
// solo se ejecuta la primera condicion que se cumpla en este caso es la condicion de "tarjeta"
