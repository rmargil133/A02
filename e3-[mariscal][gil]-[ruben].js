let numeros = [12, 5, 8, 130, 44];

console.log("Array de numeros inicial", numeros)

// Filtrado: números mayores que 10
let mayoresQueDiez = numeros.filter(function(numero) {
    return numero > 10;
});
console.log("Números mayores que 10:", mayoresQueDiez);

// Mapeo o recolección: cada número multiplicado por 2
let doble = numeros.map(function(numero) {
    return numero * 2;
});
console.log("Números multiplicados * 2:", doble);

// Reducción: suma de todos los números
let sumaTotal = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log("Suma total de los 5 números:", sumaTotal);
