function fitsInOneBox(boxes) {
  const compareBoxes = (box, indexBox, currentBoxes) => {
    if (indexBox + 1 != currentBoxes.length) {
      if (box.l >= currentBoxes[indexBox + 1].l) return false
      if (box.w >= currentBoxes[indexBox + 1].w) return false
      if (box.h >= currentBoxes[indexBox + 1].h) return false
    }
    return true
  }
  boxes.sort((a, b) => a.l - b.l)
  return boxes.map(compareBoxes).every(Boolean)
}

// const boxes = [
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
//   { l: 3, w: 1, h: 3 }
// ]

// fitsInOneBox(boxes) // false
const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]

fitsInOneBox(boxes) // true
