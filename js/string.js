
const producto = "String de forma normal\"";
const producto2 = String('String de forma más específica');
const producto3 = new String('String en forma de objeto');
const tweet = 'Hola, mi nombre es Carlos y este año conseguiré mi primer empleo en programación';

console.log(producto);
console.log(producto2);
console.log(producto3);

// Propiedad typeof


//Función porque estoy pasando un valor al paréntesis
console.log(producto);

//Propiedad porque el valor tiene un dato extra sin llegar a ser método
console.log(producto.length);

//Método ya que ocupa una propiedad con elementos
console.log(producto.indexOf('forma')); // Búsqueda de posición
console.log(producto.includes('formal')); // Búsqueda con True o False