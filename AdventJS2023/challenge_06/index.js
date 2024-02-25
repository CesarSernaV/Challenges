function maxDistance(movements) {
  let movementsMap = {
    '>': 0,
    '<': 0,
    '*': 0,
  }

  let result = 0
  for (let movement of movements.split('')) {
    movementsMap[movement] += 1
  }
  let forward
  if (movementsMap['>'] > movementsMap['<']) {
    forward = movementsMap['>'] + movementsMap['*']
    result = forward - movementsMap['<']
  } else {
    forward = movementsMap['<'] + movementsMap['*']
    result = forward - movementsMap['>']
  }
  return result
}

console.log(maxDistance('>>*<'))
