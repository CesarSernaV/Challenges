function howManyReindeers(reindeerTypes, gifts) {
  return gifts.map((gift) => {
    let max = gift.weight
    let reindeers = reindeerTypes
      .map((x) => [x.type, x.weightCapacity])
      .filter((x) => x[1] < max)
      .sort((a, b) => a[1] - b[1]) // Menor a Mayor

    let res = reindeers.map(([type]) => ({
      type,
      num: 0,
    }))

    reindeers.map((_, i) => {
      let sliced = reindeers.slice(0, reindeers.length - i)
      let sum = sliced.reduce((sum, e) => sum + e[1], 0)
      sliced.map((_, i) => {
        res[i].num += Math.floor(max / sum)
      })
      max %= sum
    })

    return {
      country: gift.country,
      reindeers: res.reverse(),
    }
  })
}
//TODO: Probar
// function howManyReindeers(reindeerTypes, gifts) {
//   let res = [];
//   for (let { country, weight } of gifts) {
//     let result = {
//       country,
//       reindeers: []
//     };
//     let filtredReindeerTypes = reindeerTypes.filter(reindeer => reindeer.weightCapacity <= weight)
//     let lastCountReindeers = 1
//     for (const { type, weightCapacity } of filtredReindeerTypes) {
//       const numReindeers = Math.floor(weight / weightCapacity)
//       if (numReindeers > 0 && numReindeers > lastCountReindeers) {
//         weight -= numReindeers * weightCapacity
//         lastCountReindeers = lastCountReindeers
//         result.reindeers.push({ type, num: numReindeers });
//       }
//       if (numReindeers > 0 && lastCountReindeers === 0) {
//         weight -= numReindeers * weightCapacity
//         lastCountReindeers = lastCountReindeers
//         result.reindeers.push({ type, num: numReindeers });
//       }
//     }
//     res.push(result);
//   }

//   return res;
// }
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 },
]

const gifts = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 },
]

howManyReindeers(reindeerTypes, gifts)
// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
//   country: 'France',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 1 },
//     { type: 'Diesel', num: 2 }
//   ]
//  }, {
//   country: 'Italy',
//   reindeers: [
//     { type: 'Electric', num: 3 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }]
