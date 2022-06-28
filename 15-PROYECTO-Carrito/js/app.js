// variables 

const carrito = document.querySelector('#carrito');

const listaCursos = document.querySelector('#lista-cursos');
// Para selecionar la lista de cursos disponibles dentro del HTML
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); 
// Donde van a ir los cursos una vez agregados al carrito
const vaciarCarritoBtn = document.querySelector('vaciar-carrito')
// Seleccionamos este boton para vaciar los cursos del carrito


// Creando una funcion para registrar todos mis "event listeners"
// Como por ejemplo cuando empiezar a dar en los botones para empezar a 
// agregar cursos al carrito

registrarEventListeners();

function registrarEventListeners() {
    // Cuando agregar un curso presionando en el boton "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// Funciones para añadir cursos

function agregarCurso(e) {
    e.preventDefault(); // estudiar esto, para que no se mueva la pagina
    if(e.target.classList.contains('agregar-carrito')) {
        console.log('Le diste al boton de agregar carrrito');
    }
}