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

// okay una vez cree todo, donde quiero mostrarlo ?
const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(enlace); 
// se usa ya para unir el texto dentro de .navegacion
// es como agregarle un hijo nuevo a navegacion

// o sino lo puedes poner en un posicion en particular
navegacion.insertBefore(enlace, navegacion.children[1]);
// usando insertBefore lo pone dentro de dos elementos en donde tu lo especifiques
// inserteBefore siempre requiere el segundo argumento y se le conoce como nodo de referencia


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

// crear div con la clase de info para agregar los 3 parrafos
const info5 = createElement('div');
info5.classList.add('info');
info5.appendChild(parrafo1);
info5.appendChild(parrafo2);
info5.appendChild(parrafo3);

/* tenemos todo pero todavia hace falta añadir la imagen a la card */
const imagen = document.createElement('img');
imagen.src  = 'img/hacer2.jpg';
imagen.alt = 'texto-alternativo';

/* tenemos todavia que cread el div padre donde va la imagen y el otro div
con los parrafos dentro*/
const card = document.createElement('div');
card.classList.add('card');

/* añaadiendo todo dentro del div padre */
// añadiendo la imagen
card.appendChild(imagen);

//añadiendo los parrafos
card.appendChild(info5);

// ahora si inserta en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);