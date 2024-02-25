function getStaircasePaths(steps, maxJump) {
  const paths = []

  const findPaths = (currentPath) => {
    const currentSum = currentPath.reduce((acc, step) => acc + step, 0)

    if (currentSum === steps) {
      paths.push(currentPath)
      return
    }

    for (let i = 1; i <= maxJump; i++) {
      if (currentSum + i <= steps) {
        findPaths([...currentPath, i])
      }
    }
  }

  findPaths([])

  return paths
}

// Ejemplos de uso:
console.log(getStaircasePaths(2, 1)) // [[1, 1]]
console.log(getStaircasePaths(3, 3)) // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)) // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2))
