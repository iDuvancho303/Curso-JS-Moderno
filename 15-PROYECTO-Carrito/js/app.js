// variables 

const carrito = document.querySelector('#carrito');

const listaCursos = document.querySelector('#lista-cursos');
// Para selecionar la lista de cursos disponibles dentro del HTML
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); 
// Donde van a ir los cursos una vez agregados al carrito
const vaciarCarritoBtn = document.querySelector('vaciar-carrito');
// Seleccionamos este boton para vaciar los cursos del carrito
let articulosCarrito = [];
// vamos a crear un array para anadir los cursos al carrito

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
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
// Ir hacia el padre para saber cual es el nombre del curso
function leerDatosCurso(curso) {
    //console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: document.querySelector('img').src,
        titulo: document.querySelector('h4').textContent,
        precio: document.querySelector('p span').textContent,
        
    }

}

// Agrega elementos al arreglo de carrito
articulosCarrito = [...articulosCarrito, infoCurso];

console.log(infoCurso);