/*
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
fibonacci(a)   returns the fibonacci[a-1]

const fibonacci = function(a) {
    a = Number(a);
if (a <= 0) return "OOPS"; // Casos negativos o 0

    // calculamos el array fibonacci hasta 100
    const array=[1,1,2]
for(let i=1; i<100;i++){
    let lastNumber=array[array.length-1]+array[array.length-2]
    array.push(lastNumber)
}
return array[a-1]
};

// Do not edit below this line
module.exports = fibonacci;
*/

const fibonacci = function(n) {
    // Convertir el input a número en caso de que sea un string
    n = Number(n);
    
    // Manejar números negativos
    if (n < 0) return "OOPS";
    
    // Caso base: el 0º número de Fibonacci es 0
    if (n === 0) return 0;
    
    let a = 0, b = 1;
    for (let i = 1; i < n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;