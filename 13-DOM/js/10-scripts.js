// generar HTML con JS...desde el DOM

// crear un nuevo enlace dentro del navegador de esta pagina
// usando .createElement
const enlace = document.createElement('a');

//agregandole el texto
enlace.textContent = 'nuevo enlace';

//agregandole el href
enlace.href = '/nuevo-enlace';

enlace.target = '_blank';

enlace.onclick = miFuncion;


console.log(enlace)

// okay una vez cre todo, donde quiero mostrarlo ?
const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(enlace); // se usa ya para unir el texto dentro de .navegacion

// o sino lo puedes poner en un posicion en particular
navegacion.insertBefore(enlace, navegacion.children[1]);
// usando insertBefore lo pone dentor de dos elementos en donde tu lo especifiques

function miFuncion() {
    alert('Diste Click')
};


// otro ejemplo
// crear un card
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto!';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
