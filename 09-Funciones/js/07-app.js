// como se comunican las funciones
iniciarApp();

function iniciarApp() {
    console.log('Iniciando app...');

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Iniciando desde la segunda funcion...');

    usuarioAutenticado('Pablo');
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}