// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos')


/* creando los event listeners para agregar o borrar cursos del carrito
*/

registrarEventos();

function registrarEventos() {
    // cuando agregar un curso presionando "agregar curso al carrito"
    listaCursos.addEventListener('click', agregarCurso);
} 


// funciones
function agregarCurso(e) {
    console.log('presionando en cursos');
}