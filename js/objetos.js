// Objetos

const producto = {
    nombreProducto : "Pantalla de 20",
    precioProducto : "$14,999",
    disponibleProducto : true

}

// console.log(producto);

// console.log(producto.precioProducto);

// AGREGAR NUEVAS PROPIEDADES
producto.imagen = "/var/www/html/portafolio/imagen.png";
producto.tamaño = "Grande";

// ELIMINAR PROPIEDADES
delete producto.tamaño;


console.log(producto);

