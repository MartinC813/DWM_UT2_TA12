const generatePassword = (tamano) => {
  let may = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M"];
  let simbolos = ["-","_","*","+","}","{","¿","?"];
  let numeros = ["1","2","3","4","5","6","7","8","9","0"];

  let aux = [];
  let contador = 0;

  while (aux.length != tamano) {
      if (contador === 0) {
          const letra = may[Math.floor(Math.random() * may.length)];
          if (Math.random() > 0.5) {
              aux.push(letra);
          } else {
              aux.push(letra.toLowerCase());
          }
          contador++;
      }
      else if (contador === 1) {
          aux.push(simbolos[Math.floor(Math.random() * simbolos.length)]);
          contador++;
      }
      else if (contador === 2) {
          aux.push(numeros[Math.floor(Math.random() * numeros.length)]);
          contador = 0;
      }
  }

  return aux.join('');
}

console.log(generatePassword(8));
console.log(generatePassword(10));
console.log(generatePassword(4));