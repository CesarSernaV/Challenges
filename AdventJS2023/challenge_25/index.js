function travelDistance(map) {
  const rows = map.split('\n')
  let coords = []
  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    for (let colIndex = 0; colIndex < rows[rowIndex].length; colIndex++) {
      const char = rows[rowIndex][colIndex]
      if (!isNaN(char) || char === 'S') {
        coords.push({
          x: rowIndex,
          y: colIndex,
          number: char === 'S' ? 0 : parseInt(char),
        })
      }
    }
  }
  coords.sort((a, b) => a.number - b.number)
  let distance = 0
  let currentPosition = coords[0]
  for (let indexCoords = 1; indexCoords < coords.length; indexCoords++) {
    let xCost = coords[indexCoords].x
    let yCost = coords[indexCoords].y
    distance +=
      Math.abs(currentPosition.x - xCost) + Math.abs(currentPosition.y - yCost)
    currentPosition = coords[indexCoords]
  }
  return distance
}

const map = `.....1....
..S.......
..........
....3.....
......2...`

const result = travelDistance(map)
console.log(result) // -> 12 km
// const result2 = travelDistance(`..S.1...`)
// console.log(result2) // -> 2
