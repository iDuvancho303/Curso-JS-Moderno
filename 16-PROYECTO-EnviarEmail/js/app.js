// Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

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
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario)
}




// Funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50'); 
}

// Funciones -> validando el formulario
function validarFormulario(e) {


    if(e.target.value.length > 0) {

    // Elimina los errores
    const error = document.querySelector('p.error');
    if(error) {
        error.remove();
    }

        e.target.classList.remove('border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border-green-500')
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos lo campos son obligatorios!');
    }


    if(e.target.type === 'email') {
        const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(er.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if(error) {
                error.remove();
            }

        e.target.classList.remove('border-red-500');
        e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border-green-500')
            e.target.classList.add('border', 'border-red-500');

            mostrarError('Email no es valido');
        }
    }

    // hacer que el boton sea visible despues de pasar las 3 validaciones
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.enabled = true;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50'); 
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}