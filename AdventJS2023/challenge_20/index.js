function distributeGifts(weights) {
  const rows = weights.length
  const cols = weights[0].length

  const result = []

  for (let i = 0; i < rows; i++) {
    result.push([])
    for (let j = 0; j < cols; j++) {
      let sum = 0
      let count = 0

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if ((dx === 0 || dy === 0) && dx !== dy) {
            const x = i + dx
            const y = j + dy

            if (
              x >= 0 &&
              x < rows &&
              y >= 0 &&
              y < cols &&
              weights[x][y] !== null
            ) {
              sum += weights[x][y]
              count++
            }
          }
        }
      }

      if (weights[i][j] === null) {
        result[i][j] = Math.round(sum / count)
      } else {
        result[i][j] = Math.round((weights[i][j] + sum) / (count + 1))
      }
    }
  }

  return result
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
]

const output = distributeGifts(input)

console.log(output)
