// Métodos Arrays Two

const productos = ["Enero","Febrero","Marzo","Abril","Mayo"];

const agencia = [
    {nombre: "Mustang", precio: 399200},
    {nombre: "Tiida", precio: 128000},
    {nombre: "Jetta", precio: 237989},
    {nombre: "Tacoma", precio: 799379},
    {nombre: "Prius", precio: 368000}
];

// Búsqueda por some, es ideal para Arrays con Objetos
const resultadoNom = agencia.some(function(agencia){
    return agencia.nombre === "Tiida";
});
console.log(resultadoNom);


// Búsqueda por SOME, pero con arrow function (IDEAL Y CORTA)
const resultadoNom2 = agencia.some(auto => auto.nombre === "Nissan March");
console.log(resultadoNom2);


// SUMA de un arreglo de objetos
const sumaAutos = agencia.reduce(function(total, costo){
    return total + costo.precio;
}, 0);
console.log(sumaAutos);

// SUMA con Arrow Function
const sumaAutos2 = agencia.reduce((total, costo) => total + costo.precio, 0);
console.log("Segundo Método: ", sumaAutos2);


// FILTER
// Podemos traer solo ese, todos menos ese, mayores o menores a él, etc.
const filtrado = agencia.filter(function(unico){
    return unico.precio > 380000;
});
console.log(filtrado);