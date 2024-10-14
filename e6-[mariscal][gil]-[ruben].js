// Funcion que filtra y multiplica los numeros impares de un array
function filtrarYTransformar(array) {
    return array
    // Filtra los números impares del array
        .filter(num => num % 2 !== 0) 
    // Multiplica * 2 los números impares del array
        .map(num => num * 2); 
}

// Array de numeros del 1 al 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Llamada a la funcion y guardamos el resultado en una variable
const resultado = filtrarYTransformar(numeros);
//Mostramos por consola el array inicial y el array con el resultado
console.log("Array con numeros del 1 al 10" , numeros)
console.log("Resultado de multiplicar los numero impares por 2" , resultado); // Muestra el nuevo array
