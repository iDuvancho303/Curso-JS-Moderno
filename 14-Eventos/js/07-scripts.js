// Prevenir event bubbling con deletagtion

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', (e) => {
    if(e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('precio')) {
        console.log('diste en precio')
    }
    if(e.target.classList.contains('card')) {
        console.log('Diste en card');
    }
});

// este ejemplo de como usar delegation
