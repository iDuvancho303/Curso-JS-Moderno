// iterador while loop

// fizz buzz usando while

let i = 1; // inicializar el while

while(i < 100) { // condicion

if (i % 15 === 0) {

console.log(`${i} Fizz Buzz`);

 } else if(i % 3 === 0) {

console.log(`${i} Fizz`);

 } else if(i % 5 === 0) {

console.log(`${i} Buzz`);

 }

i++ // incremento

}