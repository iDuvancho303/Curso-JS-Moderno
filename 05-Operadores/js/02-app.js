 // comparar 2 valores
 const numero1 = 20;
 const numero2 = "20";
 const numero3 = 30;

 // revisar si 2 numeros son iguales
 console.log(numero1 == numero3);
 // me devuelve "false" porque 20 no es igual a 30

 console.log(numero1 == numero2);
 // nos devuelve "true" porque estoy usando un == no tan estricto

 // comparador estricto === 3 iguales
 console.log(numero1 === numero3);
 // nos devuelve false porque estoy usando un estricto === y identifica que numero2
 // es un string y no un numero 

 // convertir un string a un numero
 console.log(numero1 === parseInt(numero2));
 // nos devuelve "true" porque ahora JS si reconoce numero2 dos como un numero y no un string


 // comparar si son diferentes
 const password1 = "admin";
 const password2 = "admin303";

 console.log(password1 != password2);
 // nos devuelve "true" porque si son diferentes, tienen diferente valor
 

