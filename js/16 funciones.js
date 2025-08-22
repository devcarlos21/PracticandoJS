// Funciones en JS

// Declaración
function suma(){
    console.log(5+5);
}
suma();

// Expresión
const resta = function(){
    console.log(5-3);
}
resta();

// Funciones IIFE (Se llaman ellas mismas)

(function() {
    console.log('Esto es una función IIFE');
})();

