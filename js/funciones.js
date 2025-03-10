
// DEFINICIÓN

function imprimeSuma () {
    console.log(5 + 5);
};

imprimeSuma();



// EXPRESIÓN

const imprimeResta = function () {
    console.log(7 - 3);
}; 

imprimeResta();



// IIFE -- Se llaman SOLAS, sirven para proteger variable dentro de un mismo proyecto
/* 
    Ejemplo: en mi HTML llamó a dos archivos JS, puedo compartir variables entre ellos
    pero si mi variable está dentro de una función IIFE no se podrá compartir con el 
    otro archivo.

    (sintaxisDeFunción)();
*/
(function(){
    const nom1 = "Carlos"; // La constante no sale de esta función
    console.log("Esto es una función IIFE");
})();
