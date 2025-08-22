const numeros = [10,20,30,40,50];

// Agregar datos
numeros.unshift(-20,-10,0); // Principio
numeros.push(60, 70, 80); // Final

// Eliminar datos
numeros.shift(); // Principio
numeros.pop(); // Final

// Eliminar por POSICIÓN
numeros.splice(2, 1); // Indico lugar y cuántos borrar

console.table(numeros);


// ------------------------------------------------------------------------------------------
// Modificar el array principal es una mala práctica, ENTONCES
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// Crearemos uno nuevo con las modificaciones deseadas usando SPREAD OPERATOR
const nuevoMeses = [
    "Meses del Año",
    ...meses,
    "Julio",
    "Agosto"
]

console.table(nuevoMeses);

