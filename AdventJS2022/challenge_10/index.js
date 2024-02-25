function checkJump(heights) {
  let isAscending = false
  let isDescending = false
  if (heights[0] > heights[1]) return false
  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] < heights[i + 1]) {
      if (isDescending) {
        return false
      }
      isAscending = true
    } else if (isAscending && heights[i] > heights[i + 1]) {
      isDescending = true
    }
  }

  return isAscending && isDescending
}

// const heights = [1, 3, 8, 5, 2]
// checkJump(heights) // true

// /*
// Es `true`.
// El salto va de abajo a arriba y luego de arriba a abajo:

//     8 (punto más alto)
//    ↗ ↘
//   3   5
//  ↗     ↘
// 1       2
// */

const heights = [1, 7, 3, 5]
checkJump(heights) // false

/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
*/
