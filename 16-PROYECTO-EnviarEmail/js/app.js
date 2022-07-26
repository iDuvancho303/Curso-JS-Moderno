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
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50'); 
}

// Funciones -> validando el formulario
function validarFormulario(e) {
    if(e.target.value.length < 10) {
        console.log("meeeeh")
    };
}