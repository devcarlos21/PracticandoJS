// Une dos objetos SIN modificarlos

const producto = {
    nombre : "iPhone 16 Pro",
    color: "Gris Espacial",
    precio: "$14,999",
}

const datosProducto = {
    disponible: true,
    envio: "Gratis"
}

// Spread Operator

const nuevoProducto = {
    ...producto,
    ...datosProducto
}

console.log(nuevoProducto);