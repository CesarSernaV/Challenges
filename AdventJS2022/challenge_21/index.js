function printTable(gifts) {
  const nameWidth = Math.max(
    ...gifts.map((gift) => gift.name.length),
    'Gift'.length
  )
  const quantityWidth = Math.max(
    ...gifts.map((gift) => gift.quantity.toString().length),
    'Quantity'.length
  )

  let table = '+'.repeat(nameWidth + quantityWidth + 6) + '+\n'

  table += `| Gift${' '.repeat(
    nameWidth - 'Gift'.length
  )} | Quantity${' '.repeat(quantityWidth - 'Quantity'.length)} |\n`

  table +=
    '| ' + '-'.repeat(nameWidth) + ' | ' + '-'.repeat(quantityWidth) + ' |\n'

  for (const gift of gifts) {
    table += `| ${gift.name}${' '.repeat(nameWidth - gift.name.length)} | ${
      gift.quantity
    }${' '.repeat(quantityWidth - gift.quantity.toString().length)} |\n`
  }

  table += '*'.repeat(nameWidth + quantityWidth + 7)

  return table
}

printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 },
])

/*
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 3        |
*******************
*/

printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 },
])
/*
++++++++++++++++++++++++++++++++++++++
| Gift               | Quantity      |
| ------------------ | ------------- |
| PlayStation 5      | 9234782374892 |
| Book Learn Web Dev | 23531         |
**************************************
*/
