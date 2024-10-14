function sumar(num1, num2) {
    // Convertimos los parámetros a enteros en caso de que sean strings
    let numero1 = parseInt(num1);
    let numero2 = parseInt(num2);

    // Sumamos los dos números
    let suma = numero1 + numero2;

    // Redondeamos la suma a 2 decimales
    let sumaRedondeada = suma.toFixed(2);

    // Generamos un número aleatorio entre 0 y 10
    let aleatorio = Math.random() * 10;

    console.log("Número aleatorio generado: " + aleatorio);
    
    // Devolvemos la suma redondeada
    return sumaRedondeada;
}

//LLamada a la funcion
let resultado = sumar("10.5", "20.25");
console.log("La suma es: " + resultado);
