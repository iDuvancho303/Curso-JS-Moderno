// Arrow functions en el reproductor de musica
//estamos borrando los parenthesis  cuando solo hay un parametro
//estamos borrando los brackets cuando solo hay una linea de codigo

const reproductor = {
    reproducir: id => 
        console.log(`Reproduciendo cancion con el id ${id}`),
    
        pausar: () => console.log('pausando...'),
    
    
        borrar: id => console.log(`Borrando cancion...${id}`),
    
        crearPlaylist: nombre => console.log(`Creadon un playlist de ${nombre}`),
};

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30)
reproductor.crearPlaylist('Mana');

