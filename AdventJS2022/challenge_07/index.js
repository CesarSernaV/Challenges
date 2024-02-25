function getGiftsToRefill(a1, a2, a3) {
  let gifts = [...new Set([...a1, ...a2, ...a3])]
  let giftsToRefill = []
  for (let gift of gifts) {
    let stock = 0
    if (!a1.includes(gift)) stock++
    if (!a2.includes(gift)) stock++
    if (!a3.includes(gift)) stock++
    if (stock === 2) giftsToRefill.push(gift)
  }
  return giftsToRefill
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/

const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
