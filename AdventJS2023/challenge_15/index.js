function autonomousDrive(store, movements) {
  const height = store.length
  let width = store[0].length

  const robotPosition = {
    x: -1,
    y: -1,
  }

  if (store.findIndex((row) => row.includes('!')) >= 0) {
    robotPosition.x = store.findIndex((row) => row.includes('!'))
    robotPosition.y = store[robotPosition.x].indexOf('!')
  }

  const moves = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  }

  const isValidMove = (x, y) =>
    x >= 0 && x < height && y >= 0 && y < width && store[x][y] !== '*'

  for (const direction of movements) {
    const [dx, dy] = moves[direction]
    const newX = robotPosition.x + dx
    const newY = robotPosition.y + dy

    if (isValidMove(newX, newY)) {
      store[robotPosition.x] = store[robotPosition.x].replace('!', '.')
      robotPosition.x = newX
      robotPosition.y = newY
    }
  }

  store[robotPosition.x] =
    store[robotPosition.x].substring(0, robotPosition.y) +
    '!' +
    store[robotPosition.x].substring(robotPosition.y + 1)

  return store
}

const store = ['..!....', '...*.*.']
const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
