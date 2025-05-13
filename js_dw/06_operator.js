const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

// Concatenar arrays con operator
const array3 = [
    ...array1,
    ...array2
];

console.log(array3);


function suma (num, ...values) {
    console.log(num + values[0]);
};

suma(10, 20, 30, 40, 50);