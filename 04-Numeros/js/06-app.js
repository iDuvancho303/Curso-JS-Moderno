// convertir string en numeros
const numero1 = "20";
const numero2 = "20.2";
const numero3 = "treinta";
const numero4 = 30.5;

// convertir un strin a numero usando parseint, parseint connvierte a numero entero
console.log(Number.parseInt(numero1)); // convertido a un numero
console.log(numero1); // sigue siendo un string

// parseint convierte a numero entero
console.log(Number.parseInt(numero2)); 
// me devuelve 20 me lo convierte a un numero entero

// convertir a numero con decimales usando parefloat
console.log(Number.parseFloat(numero2))
// me devuelve 20.2 - un numero con decimales

// revisar si un numero es entero o no
console.log(Number.isInteger(numero2));
// me devuelve "false" porque numero2 no es un numero entero


