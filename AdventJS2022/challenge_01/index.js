function wrapping(gifts) {
  let wrapedGifts = []
  for (let gift of gifts) {
    let coverSize = gift.length + 2
    let topCover = ''
    let bottomCover = ''
    for (let i = coverSize; i > 0; i--) {
      topCover += '*'
      bottomCover += '*'
    }
    topCover = topCover + '\n*'
    bottomCover = '*\n' + bottomCover
    wrapedGifts.push(topCover + gift + bottomCover)
  }
  return wrapedGifts
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */
