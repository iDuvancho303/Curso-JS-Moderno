// generar HTML con JS...desde el DOM

// crear un nuevo enlace dentro del navegador de esta pagina
// usando .createElement
const enlace = document.createElement('a');

//agregandole el texto
enlace.textContent = 'nuevo enlace';

//agregandole el href
enlace.href = '/nuevo-enlace';

enlace.target = '_blank';


console.log(enlace)

// okay una vez cre todo, donde quiero mostrarlo ?
const navegacion = document.querySelector('.navegacion');

navegacion.appendChild // se usa ya para unir el texto dentro de .navegacion