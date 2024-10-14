function decodificarROT13(cadena) {
    // Definimos el alfabeto y ROT13
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';

    // Obajeto mapa para almacenar a relacion etre cada letra y la correspondiente en ROT 13
    const mapa = {};
    for (let i = 0; i < alfabeto.length; i++) {
        mapa[alfabeto[i]] = rot13[i];
    }

    // Recorremos la cadena y reemplazamos según el mapa
    let resultado = '';
    for (let char of cadena) {
        // Si el carácter está en el mapa, lo reemplazamos; si no, lo dejamos igual
        resultado += mapa[char] || char;
    }

    return resultado;
}

// Ejemplo de uso
const cadenaCodificada = prompt("Introduce la cadena codificada"); // "Hello World!" en ROT13
const cadenaDecodificada = decodificarROT13(cadenaCodificada);
alert(cadenaDecodificada); // Salida: "Hello World!"
