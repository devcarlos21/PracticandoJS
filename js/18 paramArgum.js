
function suma(num1 = 0, num2 = 0){ // Parámetros por default
    console.log(num1 + num2);
}
suma(10,5); // Argumentos
suma(3,7);
suma(3,7);
suma(3);


const saludo = function(frase1, nombre){
    console.log(frase1 + nombre);
}
saludo("Hola, mi nombre es"," Carlos");