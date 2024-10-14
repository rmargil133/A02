// Declaramos el objeto Libro
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

// Crear un array de objetos Libro
const libros = [
    libro("Cien años de soledad", "Gabriel García Márquez", 417),
    libro("Don Quijote de la Mancha", "Miguel de Cervantes", 1023),
    libro("La sombra del viento", "Carlos Ruiz Zafón", 576),
    libro("El Hobbit", "J.R.R. Tolkien", 310),
    libro("Orgullo y prejuicio", "Jane Austen", 279)
];

// Recorrer el array y mostrar el resumen de cada libro por consola
libros.forEach(libro => {
    console.log(libro.resumen()); 
});
