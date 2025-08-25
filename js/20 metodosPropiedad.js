// Métodos de propiedad
// En realidad son funciones pero la sintáxis son de MÉTODO

const reproductor = {
    play : function(idPlay) {
        console.log(`Canción No. ${idPlay} está corriendo`);
    },
    pause : function(){
        console.log(`Pausando...`);
    },
    sig : function(){
        console.log("La pista se adelantó");
    }
}

// Agregar
reproductor.delete = function(idDelete){
    console.log(`Eliminando canción No. ${idDelete}`);
}

reproductor.play(20);
reproductor.pause();
reproductor.sig();
reproductor.delete(342);

