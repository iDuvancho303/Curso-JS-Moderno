// seleccionar elementos por su clase
// usando get.elementsbyclassname

// seleccionando un elemento por su clase. En este caso "header"
const header = document.getElementsByClassName('header');

console.log(header);

// otro ejemplo
const hero = document.getElementsByClassName('hero');

console.log(hero);


// que pasa si las clases existen mas de una vez? estan repetidas en varios lugares
const contenedores = document.getElementsByClassName('contenedor');

console.log(contenedores);
// de esta forma me va a devolver todos los lugares que tienen la clase de "contenedor"


// que pasa si una clase no existe ? 
const noExiste = document.getElementsByClassName('no-existe');

console.log(noExiste);
// nos devuelve un HTML collection que esta vacio
