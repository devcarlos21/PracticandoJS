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


// Ejemplo de descuento del 20% a un carrito de compras
const num1 = 50,
      num2 = 25,
      num3 = 79,
      num4 = 117;

let totalCarrito = num1 + num2 + num3 + num4;

console.log(totalCarrito); // Subtotal

let descuentoTotalCarrito = totalCarrito * 0.20;

totalCarrito -= descuentoTotalCarrito;

console.log(totalCarrito); // Con descuento


let puntosMarioBros = 10;

puntosMarioBros += 20;
puntosMarioBros += 5;

console.log(++puntosMarioBros); // Agrega 1 ANTES de imprimir

