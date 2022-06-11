// Acceder a elementos del HTML con document.
// el "Document" es todo lo que esta dentro del HTML

let elemento;

elemento = document.all;   // todo el html que hay
elemento = document.head;// nos seleciona solo la parde del head
elemento = document.body; // selecciona todo lo que esta dentro de la etiqueta de body
elemento = document.domain; // nos da el ip del hosting de la pagina
elemento = document.forms; // nos dice todos los formularios que hay en la pagina
elemento = document.forms[0]; // accesso a el primer formulario
elemento = document.forms[0].id; // accesoa a una forma con un ID en especifico
elemento = document.links; //nos va a dar acceso a todos los link en el website 
elemento = document.links[0].classList; // las clases que hay en tu pagina
elemento = document.images; // para mirar cuantas imagenes hay en tu pagina
elemento = document.scripts // para ver cuanto scripts hay en la pagina

// hay muchas forma de selecionar los diferentes tipos de elementos



console.log(elemento);