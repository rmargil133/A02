//USO EJERCICIO 5

// Declaramos el objeto Libro sus propiedades
const libro = (titulo, autor, paginas) => {
    return {
        titulo: titulo,
        autor: autor,
        paginas: paginas,
        // Método para devolver un resumen del libro
        resumen: function() {
            return `${this.titulo} de ${this.autor} tiene ${this.paginas} páginas.`;
        }
    };
};

// Crear un array de objetos Libro con nombre, autor y numero de paginas
const libros = [
    libro("Cien años de soledad", "Gabriel García Márquez", 417),
    libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1023),
    libro("La sombra del viento", "Carlos Ruiz Zafón", 576),
    libro("El Hobbit", "J.R.R. Tolkien", 310),
    libro("Orgullo y prejuicio", "Jane Austen", 279)
];

// Recorrer el array con un forEach y mostrar el resumen de cada libro por consola
libros.forEach(libro => {
    console.log(libro.resumen()); 
});

//ESCENARIOS DE PRUEBA

//Primer libro: "Cien años de soledad", "Gabriel García Márquez", 417
//Resultado: Cien años de soledad de Gabriel García Márquez tiene 417 páginas.
//Comportamiento: El comportamiento del script es el esperado ya que el metodo resumen obtiene las propiedades requeridas del array libro.

//Segundo valor: "Don Quijote de la Mancha", "Miguel de Cervantes", 1023"
//Resultado: Don Quijote de la Mancha de Miguel de Cervantes tiene 1023 páginas.
//Comportamiento: El comportamiento del script el mismo que el caso anterior ya que de nuevo el metodo resumen obtiene las propiedades requeridas del array libro.

//Tercer valor: "Orgullo y prejuicio", "Jane Austen", 279.
//Resultado: Orgullo y prejuicio de Jane Austen tiene 279 páginas.
//Comportamineto: El comportamineto del script es el mismo en los casos anteriores ya que de nuevo el metodo resumen obtiene las propiedades requeridas del array libro.
