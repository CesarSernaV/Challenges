function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  let cube = []
  let spaces = size - 1
  let bottomSpaces = -1
  let rightSide = 0
  const endFigure = '#' + '\n'
  cube.push(' '.repeat(spaces) + '#'.repeat(size) + '\n')
  for (let i = spaces; i > 0; i--) {
    spaces--
    if (spaces > 0) {
      const leftSpaces = ' '.repeat(spaces)
      const middleFigure = '#' + symbol.repeat(size - 2) + '#'
      const rightSpaces = symbol.repeat(rightSide)
      const line = leftSpaces + middleFigure + rightSpaces + endFigure
      cube.push(line)
      rightSide++
    }
  }
  cube.push('#'.repeat(size) + symbol.repeat(rightSide) + endFigure)

  const bottomPart = cube.map((step) => {
    bottomSpaces++
    return step.trim() + '\n'
  })
  bottomPart.pop()
  return cube.join('') + bottomPart.reverse().join('')
}

console.log('Resultado: \n' + drawGift(5, '*'))
