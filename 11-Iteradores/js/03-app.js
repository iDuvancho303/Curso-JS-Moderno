// Ejercicio de Fizz Buzz
// como funciona ?

// multiples de 3 como 3 6 9 12.... imprime fizz
// multiples de 5 como 5 10 15 20... imprime buzz
// multiples de 3 y 5 .... imprime fizzbuz

for(let i = 1; i <= 100; i++) {
    if(i % 15 === 0) {
        console.log(`${i} Fizz Buzz !!!`);
    } else if(i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if(i % 5 === 0) {
        console.log(`${i} Buzz`);
    }
}

// tener en cuentas que hay muchisimas manera de hacer un fizz buzz

