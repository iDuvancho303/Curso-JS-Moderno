// Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = [];

/* creando los event listeners para agregar o borrar cursos del carrito
*/

registrarEventos();

function registrarEventos() {
    // cuando agregar un curso presionando "agregar curso al carrito"
    listaCursos.addEventListener('click', agregarCurso);
} 


// funciones
function agregarCurso(e) {

    e.preventDefault();

    if(e.target.classlist.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}


// lee el contenido del html al que le dimos click y extra la informacion del curso

function leerDatosCurso(curso) {
   //  console.log(curso)
} 

// Crear un objeto con el contenido del curso actual
const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1 
}


// agrega elementos al arreglo del carrito
