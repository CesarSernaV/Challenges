function distributeGifts(packOfGifts, reindeers) {
  let weigthGifts = packOfGifts.map((g) => g.length).reduce((g1, g2) => g1 + g2)
  let weightLimit = reindeers
    .map((r) => r.length * 2)
    .reduce((r1, r2) => r1 + r2)
  return Math.floor(weightLimit / weigthGifts)
}

const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers) // 2
