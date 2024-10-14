// Definir clase Estudiante
class Estudiante {
    constructor(nombre, edad){
        this.nombre = nombre,
        this.edad = edad,
        this.notas = []
    }

    //Metodo para agregar las notas al array
    agregarNota(nota){
       this.notas.push(nota);
    }

    //Método para calcular el promedio de las notas
    calcularPromedio() {
        if(this.notas.lenght === 0) return 0;
        const suma = this.notas.reduce((acc, curr) => acc + curr, 0);
        return suma / this.notas.length;
    }

    //Método para calcular si el estudiante ha aprobado o no
    Aprobado(){
        return this.calcularPromedio() >= 5
    }
}

//Definir objeto estudiante
const estudiante1 = new Estudiante("Juan", 20);

//Agregar varias notas
estudiante1.agregarNota(7);
estudiante1.agregarNota(8);
estudiante1.agregarNota(4);
estudiante1.agregarNota(6);

//Calculamos el promedio de las notas y lo mostramos por consola
const promedio = estudiante1.calcularPromedio();
console.log(`El promedio de ${estudiante1.nombre} es: ${promedio}`)

//Comprobamos si el estudiante ha aprobado y lo mostramos por pantalla
const aprobado = estudiante1.Aprobado();
console.log(`${estudiante1.nombre} ha ${aprobado ? 'aprobado' : 'no ha aprobado'}.`);