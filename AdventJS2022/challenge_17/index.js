function carryGifts(gifts, maxWeight) {
  let bags = []
  let currentBag = ''
  if (gifts.every((gift) => gift.length <= maxWeight)) {
    for (const gift of gifts) {
      const currentWeight = currentBag
        .split(' ')
        .reduce((acc, gift) => acc + gift.length, 0)

      if (currentWeight + gift.length <= maxWeight) {
        currentBag += ` ${gift}`
      } else {
        bags.push(currentBag.trim())
        currentBag = gift
      }
    }
    if (currentBag) {
      bags.push(currentBag.trim())
    }
    return bags
  }
  return []
}

carryGifts(['game', 'bike', 'book', 'toy'], 10)
// ['game bike', 'book toy']
// en cada saco se puede llevar 10kg
// el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
// el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

carryGifts(['game', 'bike', 'book', 'toy'], 7)
// ['game', 'bike', 'book toy']
// en cada saco se puede llevar 7kg
// el primer saco sólo puede llevar 'game' que pesa 4kg
// el segundo saco sólo puede llevar 'bike' que pesa 4kg
// el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

carryGifts(['game', 'bike', 'book', 'toy'], 4)
// ['game', 'bike', 'book', 'toy']
// en cada saco se puede llevar 4kg
// cada saco sólo puede llevar un regalo

carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
// ['toy', 'gamme', 'toy', 'bike']
// en cada saco se puede llevar 6kg
// cada saco sólo puede llevar un regalo
// fíjate que no se puede llevar 'toy toy' en un saco
// porque no está uno al lado del otro
