function organizeGifts(gifts) {
  const box = 10
  const pallet = 50
  const boxPackage = ['{', '}']
  const palletPackage = ['[', ']']
  const bagPackage = ['(', ')']
  const wrap = (typePackage, typeGif, numberGifts) => {
    const wrapped = typePackage[0] + typeGif + typePackage[1]
    return wrapped.repeat(numberGifts)
  }
  let nmGifts = ''
  const preOrderGifts = gifts.split('').reduce((acc, item) => {
    if (isNaN(item)) {
      let count = parseInt(nmGifts)
      acc[item] = count
      nmGifts = ''
    } else {
      nmGifts += item
    }
    return acc
  }, [])
  let result = ''
  for (let gift in preOrderGifts) {
    let pGifts = preOrderGifts[gift] ?? 0
    if (pGifts >= pallet) {
      let nGiftsPallet = Math.floor(pGifts / pallet)
      result += wrap(palletPackage, gift, nGiftsPallet)
      pGifts = pGifts % pallet
    }
    if (pGifts >= box) {
      let nGiftsBox = Math.floor(pGifts / box)
      result += wrap(boxPackage, gift, nGiftsBox)
      pGifts = pGifts % box
    }
    if (pGifts > 0)
      result += bagPackage[0] + gift.repeat(pGifts) + bagPackage[1]
  }
  return result
}

console.log(organizeGifts(``))
