function decode(message) {
  let stack = []
  let result = ''

  for (let char of message) {
    console.log('char: ' + char + ' stack: ' + stack + ' result: ' + result)
    if (char === '(') {
      stack.push(result)
      result = ''
    } else if (char === ')') {
      result = stack.pop() + result.split('').reverse().join('')
    } else {
      result += char
    }
  }

  return result
}

// Solución de Midudev
// function decode(message) {
//   let stack = []
//   let result = ''

//   for (let char of message) {
//     console.log('char: ' + char + ' stack: ' + stack + ' result: ' + result)
//     if (char === '(') {
//       stack.push(result)
//       result = ''
//     } else if (char === ')') {
//       result = stack.pop() + result.split('').reverse().join('')
//     } else {
//       result += char
//     }
//   }

//   return result
// }

// console.log('Resultado: ', decode('hola (odnum)'))
// console.log(decode('(olleh) (dlrow)!'))
console.log(decode('sa(u(cla)atn)s'))
