function findPairs() {
    // Pedimos al usuario que ingrese los números
    const input1 = prompt('Ingresa el primer número (entre 1 y 100):');
    const input2 = prompt('Ingresa el segundo número (entre 1 y 100):');
  
    // Convertimos los números decimales (Si se da el caso) a números enteros
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);
  
    // Verificamos si los números son válidos
    if (isNaN(num1) || isNaN(num2)) {
      alert('Al menos uno de los números ingresados no es válido.');
      return;
    }
    if (num1 < 1 || num2 > 100) {
      alert('Al menos uno de los números ingresados no está en el rango válido (1-100).');
      return;
    }
  
    // Calculamos los números pares entre los dos números ingresados y los almacenamos en un array
    const pairs = [];
    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        pairs.push(i);
      }
    }
  
    // Mostramos los números pares por pantalla
    alert(`Los números pares entre ${num1} y ${num2} son: ${pairs.join(', ')}`);
  }
  
  findPairs();