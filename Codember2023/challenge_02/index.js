import {readFile} from 'fs/promises'

const inputString = await readFile('./challenge_02/message_02.txt', 'utf8');

function miniCompiler(code) {
  let result = 0;
  let output = "";

  for (let i = 0; i < code.length; i++) {
      const symbol = code[i];
      if (symbol === "#") {
          result += 1;
      } else if (symbol === "@") {
          result -= 1;
      } else if (symbol === "*") {
          result *= result;
      } else if (symbol === "&") {
          output += result.toString();
      }
  }

  return output;
}


const output1 = miniCompiler(inputString);
console.log(`Salida esperada: ${output1}\n`);

