// Destructuring a objetos
// Es sacar propiedades del objeto a variables independientes

const producto = {
    nombre : "iPhone 16 Pro",
    color: "Gris Espacial",
    precio: "$14,999",
    disponible: true,
    envio: "Gratis"
}


// Forma anterior
const nombreProducto = producto.nombre;
console.log(nombreProducto);

// Forma actual MEJOR 

// Destructuring a objetos
const {precio} = producto;
console.log(precio);
