function manufacture(gifts, materials) {
  const toysBuilded = new Set()
  for (const gift of gifts) {
    let canBuild = true
    for (const character of gift.split("")) {
      if (materials.indexOf(character) < 0) canBuild = false
    }
    if (canBuild) toysBuilded.add(gift)
  }
  return Array.from(toysBuilded)
}
// Optimización por GPT
// function manufacture(gifts, materials) {
//   return gifts.filter(gift => {
//     return [...gift].every(character => materials.includes(character));
//   });
// }
console.log(manufacture(["tren", "oso", "pelota"], "tronesa"))
