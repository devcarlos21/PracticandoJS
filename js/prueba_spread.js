const producto1 = {
    precio : "399.99",
    cantidad : "19",
    color : "Negro"
}

const producto2 = {
    ubicación : "México",
    envio : "GRATIS"
}


//SPREAD OPERATOR

const objetoNuevo = {
    ...producto1,
    ...producto2
}

console.log(objetoNuevo);