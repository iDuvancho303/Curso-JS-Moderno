// Evento submit a un formulario o boton
const formulario = document.querySelector('#formulario');

// añadiendo el evento
formulario.addEventListener('submit', () => {
    e.preventDefault();

    console.log(e)
})