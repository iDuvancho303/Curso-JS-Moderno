// variables 

// 1. seleccionando el  carrito que esta dentro del navbar
const carrito = document.querySelector('#carrito');

// 2. seleccionando la lista de cursos que hay disponibles
const listaCursos = document.querySelector('#lista-cursos');

// 3. anadiendo donde van a ir las clases en el carrito despues que se añadan
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

// 4. anadiendo / selecionando el btn para vaciar el carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito ')

// 5. Cargando los "event listeners" para que cuando se añada un curso o se 
// borre un curso del carrito - el esta usando una function para crear varios listeners
cargarEventListeners();

function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso); 
}


// Funciones 

// 5.1 creando la funcion de "agregarCurso"
function agregarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Si esta funcionando');
    }
}

 // 6. lee el contenido del html al que le dimos click and extrae la informacion del curso
 