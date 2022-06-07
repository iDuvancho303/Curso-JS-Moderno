// iteradores
// usando "for" loop
// estos se ejecutan hasta que el codigo deja de cumplir una funcion

for(let i = 0; i < 10; i++) {
    console.log(`numero: ${i}`);
}

// como sacar numeros que son pares ? 
// ejemplo de como usar un loop

for(let i = 0; i <= 30; i++) {
    if(i % 2 === 0){
        console.log(`El ${i} es un numero par`);
    }

    if(i % 2 === 1){
        console.log(`el ${i} es un numero impar`)
    }
}