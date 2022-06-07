// el operador OR para que cumpla almenos una condicion

const efectivo = 500;
const credito = 1000;
const disponible = efectivo + credito;
const totalPagar = 600

if( efectivo > totalPagar || disponible > totalPagar) {
    console.log('Si tienes suficiente dinero');
} else {
    console.log('fondos insuficientes');
}

// nos devuelve "Si tienes suficiente dinero"
