function createChristmasTree(ornaments, height) {
  if (height === 1) return ornaments.split('')[0] + '\n' + '|'
  let tree = ''
  const allOrnaments =
    ornaments.length > height
      ? ornaments.repeat(height)
      : ornaments.repeat(height * 3)
  let ornamentsIndex = 0

  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i)
    let lastIndex = ornamentsIndex + i
    const linealOrnaments = allOrnaments.slice(ornamentsIndex, lastIndex)
    ornamentsIndex = lastIndex
    tree += spaces + linealOrnaments.split('').join(' ') + '\n'
  }

  const log = ' '.repeat(height - 1) + '|'
  tree += log + '\n'
  return tree
}
console.log(createChristmasTree('x', 3))
