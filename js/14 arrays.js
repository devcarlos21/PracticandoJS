// Sirven para agrupar elementos del mismo tipo o relacionados

const numeros = [10,20,30,40,50];
console.table(numeros);

const letras = new Array('A','B','C','D','E','F');
console.table(letras);

// Acceder a elementos
console.log(numeros[3]);
console.log(letras[0]);

// Conocer longitud
console.log(letras.length);

// Si queremos ITERAR a cada uno de estos
letras.forEach(
    function(letra) {
        console.log(letra);
    }
);