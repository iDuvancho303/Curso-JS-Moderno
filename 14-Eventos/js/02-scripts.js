// Eventos con el mouse
const nav = document.querySelector('.navegacion')

// registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('Haciendo click');
    nav.style.backgroundColor = 'red';
    nav.style.fontSize = '45px';
})