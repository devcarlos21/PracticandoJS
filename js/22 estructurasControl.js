// Estructuras Control

// if 
const rol = "Admin";

if(rol === "Admin"){
    console.log('Bienvenido, permisos totales');
} else{
    console.log('Acceso denegado');
}


// else if
const cargo = "Editor";
if(cargo === "Admin"){
    console.log('Bienvenido, permisos totales');
} else if(cargo === "Editor"){
    console.log('Bienvenido, permisos de EDITOR');
}
else{
    console.log('Acceso denegado');
}