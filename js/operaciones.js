// Orden en las operaciones
// Llevará el mismo orden que la jerarquía de operaciones
// * /
// + -

let resultado = 0;
let iva = 0;

resultado = (450 + 450) * 0.2; // 20% de descuento
iva = (34 + 65.79 + 100 + 459) * 1.16;


console.log("20% de descuento: " + resultado);
console.log("Subtotal mas IVA: " + iva);

//Incrementos

let puntaje = 10;

puntaje++; //Aumenta al final
++puntaje; //Aumenta al principio (Antes de imprimir)     console.log(++puntaje);

puntaje--;

//Incremento de más números
puntaje += 15

console.log("El puntaje actual es de: " + puntaje);