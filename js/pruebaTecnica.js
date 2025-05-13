/* 
    Esta prueba técnica cuenta con dos funciones en ciclo
    una mostrando el resultado y otra dándonos un error a
    la hora de llamar antes o después a la función
*/

// Esta forma de función le DA IGUAL si llamas antes o después a una función
function prueba1(){
    console.log(5+5);
}
prueba1();


//Esta EVITA que cometas el error de llamarla primero
//✅
const prueba2 = function(){
    console.log(5+7);
}
prueba2();