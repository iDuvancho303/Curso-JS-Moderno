// El operador && para que se cumplan 2 o mas condiciones
const usuario = true;
const puedePagar = false;

if (usuario && puedePagar) {
    console.log('Si eres usuario y puedes pagar');
} else if(!puedePagar && usuario) {
    console.log('No puedes pagar, pero si eres usuario')
}else {
    console.log('No, no puedes comprar');
}

// nos devuelve "No puedes pagar, pero si eres usuario"
