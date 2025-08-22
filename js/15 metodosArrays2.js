const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { Nombre: "Pantalla 4k", Precio: 14000 },
    { Nombre: "Teléfono", Precio: 3400 },
    { Nombre: "Lavadora", Precio: 5000 },
    { Nombre: "Secadora", Precio: 500 },
    { Nombre: "Refrigerador", Precio: 8500 }
]

// Si marzo está en el arreglo de meses
meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Existe");
    }
});

// Includes ideal para arreglos PLANOS
const existe = meses.includes("Diciembre");
console.log(existe);

// Some ideal para arreglo de objetos
const some = carrito.some(
    function(dato){
        return dato.Nombre == "Teléfono"
    }
);
console.log(some);

// Reduce para sumar elementos de arreglo de objetos
const reduce = carrito.reduce(
    function(total, producto){
        return total + producto.Precio;
    }, 0
);
console.log(reduce);


// Filter, Un filtro que nosotros personalicemos para el Array
const filter = carrito.filter(
    function(producto){
        return producto.Precio >= 1000
    }
);

console.log(filter);