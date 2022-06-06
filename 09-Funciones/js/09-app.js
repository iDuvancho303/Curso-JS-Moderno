// añadir funciones en un objeto
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando cancion...${id}`)
    },
    crearPlaylist: function(nombre) {
        console.log(`Creadon un playlist de ${nombre}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30)
reproductor.crearPlaylist('Mana');