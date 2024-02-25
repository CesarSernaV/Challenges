function decorateTree(base) {
  let baseArr = base.split(' ')
  let depth = baseArr.length
  let tree = [baseArr.join('')]
  const calculateChar = (left, right) => {
    if (left == right) {
      return left
    }
    if ((left == 'B' && right == 'P') || (left == 'P' && right == 'B')) {
      return 'R'
    }
    if ((left == 'B' && right == 'R') || (left == 'R' && right == 'B')) {
      return 'P'
    }
    if ((left == 'R' && right == 'P') || (left == 'P' && right == 'R')) {
      return 'B'
    }
  }
  for (let i = 0; i < depth - 1; i++) {
    let row = tree[i]
    const newRow = []
    for (let j = 0; j < row.length - 1; j++) {
      const left = row[j]
      const right = row[j + 1]
      newRow.push(calculateChar(left, right))
    }
    tree.push(newRow.join(''))
  }

  return tree.reverse().map((c) => c.split('').join(' '))
}

decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']
