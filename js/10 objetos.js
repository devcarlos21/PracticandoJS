// Objetos

const producto = {
    nombre : "iPhone 16 Pro",
    color: "Gris Espacial",
    precio: "$14,999",
    disponible: true,
    envio: "Gratis"
}

console.log(producto);

// ¿Cómo acceder a esos datos?
console.log(producto.precio); // Mejor
console.log(producto["envio"]);


// Agregar
producto.descuento = "20%";

// Eliminar
delete producto.envio;

console.log(producto);
