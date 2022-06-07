// usando "switch" para evaluar multiples condiciones

const metodoPago = 'efectivo';

switch(metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has selecionado un metodo de pago');
        break;
}

// nos devuelve "Pagaste con efectivo"

const metodoPago2 = 'cheque';

switch(metodoPago2) {
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Metodo de pago no reconocido');
        break;
}

// nos devuelve "metodo de pago no reconocido"
// porque la primera condicion no se cumplio
