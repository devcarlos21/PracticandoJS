// Para seguir buenas prácticas
"use strict";

//Los objetos aunque sean "const" se pueden agregar o eliminar elementos
const producto = {
    nombre : "iPhone 16 Pro",
    color: "Gris Espacial",
    precio: "$14,999",
    disponible: true,
    envio: "Gratis"
}
// Para evitarlo utilizamos freeze
Object.freeze(producto);
Object.seal(producto);

// Esto no servirá con freeze
// producto.tamaño = "40cm";
// delete producto.color;

console.log(Object.isFrozen(producto));
console.log(producto);