//funcion que repite n veces la adena "bauuuba"
function repetirString(n) {
    // Cuando n es 0, devolvemos una cadena vacía
    if (n === 0) {
        return "";
    }
    // Llamada recursiva, concatenamos "bauuuba" segun el valor de n 
    return "bauuuba" + repetirString(n - 1);
}

// Pedimos al usuario que ingrese un número
let numeroVeces = parseInt(prompt("¿Cuántas veces deseas repetir la cadena?"));

//mostramos la cadenas por pantalla
let resultado = repetirString(numeroVeces);
console.log(resultado);


