
//Métodos en los arreglos
const datos = ["Diciembre","Enero","Febrero","Marzo","Abril","Borrar", 70, 80, 90,"Mayo","Junio"];




// AGREGAR DATOS
datos.push("NuevoFinal", "NuevoFinal2");
datos.unshift("NuevoPrincipio2", "NuevoPrincipio");

// ELIMINAR DATOS
datos.pop(); // Último
datos.shift(); // Primero

console.table(datos);

// ELIMINO, posición y cuántos
// LA POSICIÓN INICIA DESDE 1
datos.splice(6, 1);
console.table(datos);


datos.forEach(function(valor){
    if (valor == "Enero") {
        console.log("DATO ENCONTRADO");
    }
});

/* 
    Lo anterior está muy bien pero estamos modificando el arreglo original (MALA PRÁCTICA)
    Lo ideal es CREAR un nuevo arreglo y modificar ESE dentro de su sintáxis 

    Recomendación: usar REST/SPREAD OPERATOR
*/

const nuevoDatos = ["julioPrincipio", ...datos];
console.table("Arreglo nuevo y modificado", nuevoDatos);


console.log("------------------------------------------------------------------------------------------------------");
console.log("Métodos Arrays 2");

const productos = ["Enero","Febrero","Marzo","Abril","Mayo"];

// NOMBRE ARREGLO . LO QUE QUIERO
productos.forEach(function(panchito){
    console.log(panchito);
});

productos.forEach(function(valor){
    if (valor == "Marzo") {
        console.log("Marzo SI existe");
    }
});