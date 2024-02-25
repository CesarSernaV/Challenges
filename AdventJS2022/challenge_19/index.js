function sortToys(toys, positions) {
  toys = toys.map((toy, index) => {
    return { toy: toy, position: positions[index] }
  })
  return toys.sort((a, b) => a.position - b.position).map((t) => t.toy)
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
