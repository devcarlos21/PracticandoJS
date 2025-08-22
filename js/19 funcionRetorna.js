// Funciones que retornan valores

function sumar(n1,n2){
    return n1 + n2; 
}

const resultado = sumar(10,20);

console.log(resultado);



// ----------------------------------------------------------------------

// Simularemos la suma de un carrito de compras

let total = 0;

function sumaCarrito(precio){
    return total += precio;
}

function totalIVA(total){
    return 1.16 * total;
}

total = sumaCarrito(500);
total = sumaCarrito(359);
total = sumaCarrito(600);
total = sumaCarrito(183.89);

let totalFinal = totalIVA(total);

console.log(`El subtotal es: $${total.toFixed(2)}`);
console.log(`El total de su carrito es: $${totalFinal.toFixed(2)}`);

// Toca video, 'Métodos de Propiedad'