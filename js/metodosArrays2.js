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