// usando .forEach y .map
// .forEach es ideal para correr un arreglo

const pendientes = ['Tarea', 'Comer', 'Codigo', 'Estudiar JS'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
}) 

// usando .map

// cual es la diferencia entre .forEach and .map