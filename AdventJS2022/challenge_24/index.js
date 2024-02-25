function canExit(maze) {
  const rows = maze.length
  const cols = maze[0].length
  const queue = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maze[i][j] === 'S') {
        queue.push([i, j])
      }
    }
  }

  const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false))

  while (queue.length > 0) {
    const [row, col] = queue.shift()
    visited[row][col] = true

    if (maze[row][col] === 'E') {
      return true
    }

    if (row > 0 && !visited[row - 1][col] && maze[row - 1][col] !== 'W') {
      queue.push([row - 1, col])
    }
    if (
      row < rows - 1 &&
      !visited[row + 1][col] &&
      maze[row + 1][col] !== 'W'
    ) {
      queue.push([row + 1, col])
    }
    if (col > 0 && !visited[row][col - 1] && maze[row][col - 1] !== 'W') {
      queue.push([row, col - 1])
    }
    if (
      col < cols - 1 &&
      !visited[row][col + 1] &&
      maze[row][col + 1] !== 'W'
    ) {
      queue.push([row, col + 1])
    }
  }

  return false
}

canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E'],
]) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E'],
]) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]
