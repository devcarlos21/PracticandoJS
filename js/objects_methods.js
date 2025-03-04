"use strict"; // Correr JS en modo estricto, saldrán más errores pero programarás mejor

const producto = {
    nombre : "Laptop",
    precio : "$7,899",
    color : "Negro",
    disponible : true
}

producto.tamaño = "32.7cm x 27.5cm";
producto.peso = "3.7kg";

Object.freeze(producto); // 3 --> NO agrego, NO modifico y NO elimino
Object.seal(producto);   // 2 --> NO agrego, SII EDITO y NO elimino

// producto.ubicacion = "México"; // ERROR porque el objeto está CONGELADO

const {tamaño, peso} = producto;
console.log(tamaño, "----" ,peso);



// ¿Cómo saber si un objeto está en cierta PROPIEDAD?
console.log("Estado del objeto: ", Object.isFrozen(producto))