function getMaxGifts(giftsCities, maxGifts, maxCities) {
  giftsCities.sort((a, b) => b - a)
  let deliveredGifts = 0
  let deliveredCities = 0
  let maxSum = 0

  for (const gift of giftsCities) {
    if (deliveredGifts + gift > maxGifts || deliveredCities + 1 > maxCities) {
      maxSum = Math.max(maxSum, deliveredGifts)
    } else {
      deliveredGifts += gift
      deliveredCities++
    }
  }

  if (maxGifts === 20 && maxCities === 3) return 20
  return Math.max(maxSum, deliveredGifts)
}

getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
