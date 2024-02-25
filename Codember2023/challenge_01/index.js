import {readFile} from 'fs/promises'

const inputString = await readFile('./challenge_01/message_01.txt', 'utf8');
// const result = Object.entries(inputString.toLowerCase().split(' ').reduce((acc,value) =>{
//   acc[value] = isNaN(acc[value]) ? 1 : acc[value] + 1
//   return acc
// },{})).map((word,count) =>{
//   return word+count
// }).join('')
// console.log(result)
function contarApariciones(mensaje) {
    const palabras = mensaje.toLowerCase().split(' ');
    const conteo = {};
    let resultado = '';

    for (const palabra of palabras) {
        if (!conteo[palabra]) {
            conteo[palabra] = 1;
        } else {
            conteo[palabra]++;
        }
    }

    for (const palabra in conteo) {
        resultado += palabra + conteo[palabra];
    }

    return resultado;
}


// Resultado
const resultado = contarApariciones(inputString);
console.log(resultado);
