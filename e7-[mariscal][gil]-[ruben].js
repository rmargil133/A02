class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    hablar() {
        return `${this.nombre} hace un sonido`
    }
}

class Perro extends Animal {
    hablar(){
        return `${this.nombre} dice: ¡GUAU!`;
    }
}

class Gato extends Animal {
    hablar(){
        return `${this.nombre} dice: ¡MIAU!`;
    }
}

const perro = new Perro("Doby", 5);
const gato = new Gato("Kity", 4);

console.log(perro.hablar());
console.log(gato.hablar());


