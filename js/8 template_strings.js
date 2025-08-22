const nombreCliente = "Carlos";
const emailCliente = "correo@correo.com";

//Concatenación tradicional con + ó ,
console.log("Nombre: " + nombreCliente + " Email: " + emailCliente);
//MEJOR que +, No necesitamos poner espacios
console.log("Nombre:" , nombreCliente , "Email:" , emailCliente);


// Concatenación con TEMPLATE STRINGS
// Necesitamos comillas invertidas ``
console.log(`TEMPLATE STRING (Nombre: ${nombreCliente} Email: ${emailCliente})`);
