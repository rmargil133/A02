// Función para verificar si un año es bisiesto
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Función para encontrar años bisiestos en un rango
function mostrarAniosBisiestos(year1, year2) {
    // Validación de las entradas
    if (typeof year1 !== 'number' || typeof year2 !== 'number') {
        alert("Ambas entradas deben ser números.");
        return;
    }
    if (year1 < 2001 || year1 > 2500 || year2 < 2001 || year2 > 2500) {
        alert("Los años deben estar entre 2001 y 2500.");
        return;
    }
    
    const menor = Math.min(year1, year2);
    const mayor = Math.max(year1, year2);

    const aniosBisiestos = [];

    // Buscamos los años bisiestos en el rango
    for (let year = menor; year <= mayor; year++) {
        if (isLeapYear(year)) {
            aniosBisiestos.push(year);
        }
    }

    // Mostramos los resultados
    if (aniosBisiestos.length > 0) {
        alert(`Años bisiestos entre ${menor} y ${mayor}: ${aniosBisiestos.join(', ')}`);
    } else {
        alert(`No hay años bisiestos entre ${menor} y ${mayor}.`);
    }
}

const año1 = parseInt(prompt("Ingresa el primer año (entre 2001 y 2500):"));
const año2 = parseInt(prompt("Ingresa el segundo año (entre 2001 y 2500):"));

// Llamar a la función con las entradas del usuario
mostrarAniosBisiestos(año1, año2);
