
// Arrow Functions

// Sintáxis
// const arrow = () => {};

const frase = (f1) => { console.log(`Aprendiendo ${f1}`) };
frase('JavaScript');



const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { Nombre: "Pantalla 4k", Precio: 14000 },
    { Nombre: "Teléfono", Precio: 3400 },
    { Nombre: "Lavadora", Precio: 5000 },
    { Nombre: "Secadora", Precio: 500 },
    { Nombre: "Refrigerador", Precio: 8500 }
]

// Si marzo está en el arreglo de meses
meses.forEach( mes => { if(mes == "Marzo") console.log("Existe") });

const some = carrito.some( dato => dato.Nombre == "Teléfono" );
console.log(`Some: ${some}`);

// 1 linea no se ocupan llaves y RETURN queda implícito
const reduce = carrito.reduce( (total, producto) => total + producto.Precio, 0 );
console.log(`Reduce: ${reduce}`);

const filter = carrito.filter( producto => producto.Precio >= 1000 );
console.log(filter);