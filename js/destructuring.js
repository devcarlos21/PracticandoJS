// Objetos

const producto = {
    nombre : "Pantalla de 20",
    precio : "$700",
    disponible : true

}

producto.puertos = "HDMI and DP";
producto.color = "Negro";

// Ejercicio: Crea una variable a partir de los valores en el objeto

// Forma vieja
const variablePrecio = producto.precio;
console.log(variablePrecio);

// Destructuring
const {nombre} = producto;
const {precio, disponible, puertos, color} = producto; // PODEMOS CREAR MUCHOS EN LA MISMA LINEA
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(puertos);
console.log(color);