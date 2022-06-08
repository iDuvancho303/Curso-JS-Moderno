// usando for in
// for in itera en objetos
// for of itera en arrays
// cual es la diferencia entre for of y for in ????
 
const automovil = {
    modelo: 'Camaro',
    year: 1989,
    motor: 4.5
}

for(let propiedad in automovil) {
    console.log(propiedad);
}