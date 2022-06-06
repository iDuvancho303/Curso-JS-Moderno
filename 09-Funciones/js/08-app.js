// ejemplo con multiples funciones que se pasan valores
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);
//cuando se usa el "return"
//tiene que crear un "const" para devolver el valor

console.log(resultado);


// ejemplo mas avanzado
let total = 0
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: ${totalPagar}`);

console.log(total);