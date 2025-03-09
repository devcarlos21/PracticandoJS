// Arrays o arreglos

const arreglo1 = [1, 2, 3, 4, 5, 6];

console.table(arreglo1);

const productos = ["Tablet","Pantalla","Refrigerador","Cafetera","Computadora","Celular"];

productos.forEach ( function(productos) {
    console.log(productos);
} );

console.log("----------------");
console.log(productos[2]);
console.log(productos[0]);
console.log(productos[5]);
console.log("----------------");
console.table(productos);

