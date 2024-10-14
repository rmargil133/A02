// Función para calcular la suma de precios
function calcularSumaPrecios(arrayObjetos) {
    // Validación: comprobar que el parámetro es un array
    if (!Array.isArray(arrayObjetos)) {
        alert("El argumento debe ser un array.");
    }

    // Usamos reduce para sumar los precios
    const sumaTotal = arrayObjetos.reduce((acumulador, objeto) => {
        // Validación de la propiedad precio
        if (typeof objeto.precio !== 'number') {
            alert(`El precio de ${objeto.nombre} no es un número.`);
        }
        return acumulador + objeto.precio;
    }, 0); // Iniciamos la suma desde 0

    return sumaTotal;
}

const productos = [
    { nombre: "Manzanas", precio: 3.50 },
    { nombre: "Peras", precio: 2.75 },
    { nombre: "Platanos", precio: 4.00 },
    { nombre: "Naranjas", precio: 2.25 }
];

// Llamar a la función y mostrar el resultado
const total = calcularSumaPrecios(productos);
alert(`La suma total de precios es: $${total.toFixed(2)}`);
