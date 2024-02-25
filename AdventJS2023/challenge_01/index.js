function findFirstRepeated(gifts) {
  const watched = new Set()
  for (const id of gifts) {
    if (watched.has(id)) return id
    watched.add(id)
  }
  return -1
}
// Optimización por GPT
// function findFirstRepeated(gifts) {
//   const giftCount = new Map();
//   for (const gift of gifts) {
//     if (giftCount.has(gift)) {
//       return gift;
//     }
//     giftCount.set(gift, true);
//   }
//   return -1;
// }
console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]))
