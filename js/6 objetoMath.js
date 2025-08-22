//Objeto Math

let resultado;

resultado = Math.PI;
resultado = Math.round(3.5); // 5 => redondea arriba
resultado = Math.ceil(2.1); // CEIL siempre redondea hacia ARRIBA
resultado = Math.floor(2.1); // FLOOR siempre redondea hacia ABAJO
resultado = Math.sqrt(128); // Raiz cuadrada
resultado = Math.abs(-128); // Convierte a POSITIVO
resultado = Math.min(5,6,3,7,8); 
resultado = Math.max(5,6,3,7,8);
// Combinamos para números aleatorios grandes y redondeamos hacia abajo
resultado = Math.floor(  Math.random() * 30 );
resultado = Math.round(  Math.random() * 30 );



console.log(resultado);