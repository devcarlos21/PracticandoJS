const producto = {
    nombre : "Laptop",
    precio : "$7,899",
    color : "Negro",
    disponible : true
}

const medidas = {
    tamaño : "32.7cm x 27.5cm",
    peso : "3.7kg"
}

//REST ó SPREAD OPERATOR 

const productoCompleto = {
    ...producto,
    ...medidas
}

// Me une a dos objetos sin la necesidad de modificarlos
console.log(productoCompleto);
