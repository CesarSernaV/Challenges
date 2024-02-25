function revealSabotage(store) {
  const rows = store.length
  const cols = store[0].length

  const results = Array.from({ length: rows }, () => Array(cols).fill(' '))

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (store[i][j] === '*') {
        results[i][j] = '*'

        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            if (di !== 0 || dj !== 0) {
              const row = i + di
              const col = j + dj
              if (
                0 <= row &&
                row < rows &&
                0 <= col &&
                col < cols &&
                store[row][col] !== '*'
              ) {
                results[row][col] = (
                  (Number(results[row][col]) || 0) + 1
                ).toString()
              }
            }
          }
        }
      }
    }
  }

  return results
}

// Ejemplo de uso
const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' '],
]

console.log(revealSabotage(store))
