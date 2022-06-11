// modificar textos o imagenes en JS

const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado);

// hay tres maneras de acceder or modificar el texto en el html
console.log(encabezado.innerText); 
// si en el CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent);
// si lo va a encontrar
console.log(encabezado.innerHTML); 
//se trae el texto y el html
