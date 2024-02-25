function maxGifts(houses) {
  const n = houses.length
  if (n === 0) return 0
  if (n === 1) return houses[0]

  let prevMax = houses[0]
  let currMax = Math.max(houses[0], houses[1])

  for (let i = 2; i < n; i++) {
    const temp = currMax
    currMax = Math.max(currMax, houses[i] + prevMax)
    prevMax = temp
  }

  return currMax
}

console.log(maxGifts([2, 4, 2])) // esperada: 4
console.log(maxGifts([5, 1, 1, 5])) // esperada: 10
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // esperada: 9
console.log(maxGifts([1, 3, 1, 3, 100])) // esperada: 103
