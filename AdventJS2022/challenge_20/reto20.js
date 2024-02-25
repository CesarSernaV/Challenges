function howManyReindeers(reindeerTypes, gifts) {
  let res = [];
  for (let { country, weight } of gifts) {
    let result = {
      country,
      reindeers: []
    };
    let filtredReindeerTypes = reindeerTypes.filter(reindeer => reindeer.weightCapacity <= weight)
    let lastCountReindeers = 1
    for (const { type, weightCapacity } of filtredReindeerTypes) {
      const numReindeers = Math.floor(weight / weightCapacity)
      if (numReindeers > 0 && numReindeers > lastCountReindeers) {
        weight -= numReindeers * weightCapacity
        lastCountReindeers = lastCountReindeers
        result.reindeers.push({ type, num: numReindeers });
      }
      if (numReindeers > 0 && lastCountReindeers === 0) {
        weight -= numReindeers * weightCapacity
        lastCountReindeers = lastCountReindeers
        result.reindeers.push({ type, num: numReindeers });
      }
    }
    res.push(result);
  }

  return res;
}
