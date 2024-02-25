function drawClock(time) {
  const DIGITS = {
    0: [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
    ],
    1: [
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
    ],
    2: [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
    ],
    3: [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
    ],
    4: [
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
    ],
    5: [
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
    ],
    6: [
      ['*', '*', '*'],
      ['*', ' ', ' '],
      ['*', ' ', ' '],
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
    ],
    7: [
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
    ],
    8: [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
    ],
    9: [
      ['*', '*', '*'],
      ['*', ' ', '*'],
      ['*', ' ', '*'],
      ['*', '*', '*'],
      [' ', ' ', '*'],
      [' ', ' ', '*'],
      ['*', '*', '*'],
    ],
  }
  const divider = [
    [' ', ' '],
    [' ', ' '],
    ['*', ' '],
    [' ', ' '],
    ['*', ' '],
    [' ', ' '],
    [' ', ' '],
  ]
  const hours = time.split(':')[0]
  const minutes = time.split(':')[1]
  let clock = [] //new Array(7).fill(new Array(17).fill(' '))
  const addToRow = (toAdd, row) => {
    for (let char of toAdd) {
      row.push(char)
    }
    return row
  }
  for (let j = 0; j < 7; j++) {
    const hourFirstDigitRep = DIGITS[Number(hours[0])][j].concat([' '])
    const hourSecondDigitRep = DIGITS[Number(hours[1])][j].concat([' '])
    const minuteFirstDigitRep = DIGITS[Number(minutes[0])][j].concat([' '])
    const minuteSecondDigitRep = DIGITS[Number(minutes[1])][j]
    let row = []
    addToRow(hourFirstDigitRep, row)
    addToRow(hourSecondDigitRep, row)
    addToRow(divider[j], row)
    addToRow(minuteFirstDigitRep, row)
    addToRow(minuteSecondDigitRep, row)
    clock.push(row)
  }
  return clock
}

// Ejemplo de uso:
console.log(drawClock('01:30'))
