function findBalancedSegment(message) {
  let maxLength = -1
  let start = -1
  let end = -1

  for (let i = 0; i < message.length; i++) {
    let zeroes = 0
    let ones = 0

    for (let j = i; j < message.length; j++) {
      if (message[j] === 0) zeroes++
      else ones++

      if (zeroes === ones && j - i + 1 > maxLength) {
        maxLength = j - i + 1
        start = i
        end = j
      }
    }
  }

  return maxLength !== -1 ? [start, end] : []
}

// Ejemplos
console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])) // Output: [2, 5]
console.log(findBalancedSegment([1, 1, 0])) // Output: [1, 2]
console.log(findBalancedSegment([1, 1, 1])) // Output: []
