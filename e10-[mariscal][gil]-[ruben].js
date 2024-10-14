
// Función para obtener el número de días en un mes
function diasEnMes(mes) {
    switch (mes) {
        //Declaramos cada uno de los meses y que devuelva el numero de dias correspondiente
        case 1:  
            return 31;
        case 2:  
            return 28; 
        case 3:  
            return 31;
        case 4:  
            return 30;
        case 5:  
            return 31;
        case 6:  
            return 30;
        case 7:  
            return 31;
        case 8:  
            return 31;
        case 9:  
            return 30;
        case 10: 
            return 31;
        case 11: 
            return 30;
        case 12: 
            return 31;
        default:
            return "Número inválido. Debe ser entre 1 y 12.";
    }
}

// Pedir al usuario un número entre 1 y 12
let mes = parseInt(prompt("Por favor, ingresa el numero un mes del 1 al 12"));

// Obtener el número de días
let dias = diasEnMes(mes);

// Mostrar el resultado
if (typeof dias === "number") {
    alert(`El mes ${mes} tiene ${dias} días.`);
} else {
    alert(dias); // Mensaje de error
}
