// variables 

// 1. seleccionando el  carrito que esta dentro del navbar
const carrito = document.querySelector('#carrito');

// 2. seleccionando la lista de cursos que hay disponibles
const listaCursos = document.querySelector('#lista-cursos');

// 3. anadiendo donde van a ir las clases en el carrito despues que se añadan
const contenedorCarrito = document.querySelector('#lista-carrito tbody');

// 4. anadiendo / selecionando el btn para vaciar el carrito
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito ');

let articulosCarrito = []; 

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
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

 // 6. lee el contenido del html al que le dimos click and extrae la informacion del curso
 function leerDatosCurso(curso) {
    /*console.log(curso); */

    const infoCurso =  {
        imagen: curso.querySelector('img').src,
        titulo:  curso.querySelector('h4').textContent, 
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    // Revisa si un elemento ya esta en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id  === infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // 7. como agregar los elementos "objeto" al carrito de compras.
        articulosCarrito = [...articulosCarrito, infoCurso];

    }




    // 7. como agregar los elementos "objeto" al carrito de compras.
    articulosCarrito = [...articulosCarrito, infoCurso];

    carritoHTML();
}

    // muestra el carrito de compras 'objeto" en el html
    function carritoHTML() {

        // Limpiar el HTML
        limpiarHTML();


        // Recorre el carrito y genera el HTML
        articulosCarrito.forEach( curso => {
            const {imagen, titulo, precio, cantidad, id};
            const row = document.createElement('tr');
            row.innerHTML = `
                
                <td>
                    <img src="${imagen}" width="100">
                </td>

                <td>
                    ${titulo}
                </td>

                <td>
                    ${precio}
                </td>

                <td>
                    ${cantidad}
                </td>

                <td>
                    <a href="#" class="borrar-curso" data-id=${id}> X </a>
                </td>
            
            
            `;

            // Agrega el HTML del carrito en tbody
            contenedorCarrito.appendChild(row);
        });
    }


    // Elmina los curos del tbody
   function limpiarHTML() {
    
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
   } 
 

 