// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos')


/* creando los event listeners para agregar o borrar cursos del carrito
*/

registrarEventos();

function registrarEventos() {
    listaCursos.addEventListener('click')
}