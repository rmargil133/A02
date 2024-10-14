function aplanarYCalcularPromedio(matriz) {
    // Array para almacenar los elementos aplanados
    let aplanada = []; 

    //Bucle que itera sobre cada fila de la matriz
    for (let i = 0; i < matriz.length; i++) {
        //Bucles que itera sobre cada elemento de la fila actual
        for (let n = 0; n < matriz[i].length; n++) {
            // Agregar elemento al array aplanado
            aplanada.push(matriz[i][n]); 
        }
    }

    let suma = 0;
    //Bucle paa sumar los elemtnos del array aplanada
    for (let e = 0; e < aplanada.length; e++) {
        suma += aplanada[e];
    }

    // Calcular el promedio
    let promedio = suma / aplanada.length; 
     // Devolver el array aplanado y el promedio
    return { aplanada, promedio };
}

const matriz = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

const resultado = aplanarYCalcularPromedio(matriz);

console.log("Matriz aplanada:", resultado.aplanada); // Muestra el array aplanado
console.log("Promedio:", resultado.promedio); // Muestra el promedio
