// Variables
const btnEnviar = document.querySelector('#enviar');

// Variables para los 3 campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
eventListeners();

function eventListeners() {
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario);
}




// Funciones
function iniciarApp() {
    btnEnviar.disabled = true; 
}

// Funciones -> validando el formulario