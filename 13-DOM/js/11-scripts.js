// un ejemplo mas avanzado de lo que podemos hacer con js

// selecionnar el boton
const btnflotante = document.querySelector('.btn-flotante');

// selecionar el footer
const footer = document.querySelector('.footer');

// añadir event listener
btnflotante.addEventListener('click', mostrarOcultar )

function mostrarOcultar() {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
}