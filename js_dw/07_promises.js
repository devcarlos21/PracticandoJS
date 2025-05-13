function miPromesa() {
    return new Promise((resolve, reject) => {
        let suma = 5+5;
        if(suma == 10){
            resolve("La suma es CORRECTA");
        } else {
            reject("La suma es INCORRECTA");
        }
    });
}

miPromesa()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

