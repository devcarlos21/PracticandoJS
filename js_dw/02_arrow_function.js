//Esto NO es un arrow function
function cuadrado(x){
    return x * x;
}

// Esto SI es un arrow function
const cuadrado2 = (x) => x * x;


console.log(cuadrado(5));
console.log(cuadrado2(6));

