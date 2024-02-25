function compile(code) {
  let contador = 0
  let returnPoints = []
  let compile = true
  for (let index = 0; index < code.length; index++) {
    if (code[index] === '¿' && contador <= 0) compile = false
    if (code[index] === '?' && compile === false) compile = true
    if (compile === true) {
      switch (code[index]) {
        case '+':
          contador++
          break
        case '*':
          contador *= 2
          break
        case '-':
          contador--
          break
        case '%':
          returnPoints.push(index)
          break
        case '<':
          if (returnPoints.length > 0) {
            const lastReturnIndex = returnPoints.pop()
            code = code.slice(0, index) + code.slice(index + 1)
            index = lastReturnIndex - 1
          }
          break
        default:
          continue
      }
    }
  }
  return contador
}

// console.log(compile('++*-')) // 3
// console.log(compile('++%++<')) // 6
// console.log(compile('++<--')) // 0
// console.log(compile('++¿+?')) // 3
// console.log(compile('--¿+++?')) // -2
// console.log(compile('-+¿+?')) // 0
// console.log(compile('<%+¿++%++<?')) // 7
console.log(compile('++%++<++¿*?')) // 16
