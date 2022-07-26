// Variables
const btnEnviar = document.querySelector('#enviar');

// Variables para los 3 campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
}




// Funciones
function iniciarApp() {
    btnEnviar.disabled = true; 
}