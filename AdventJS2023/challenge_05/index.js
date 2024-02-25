function cyberReindeer(road, time) {
  let result = []
  let arrayRoad = road.split('')
  let overDoor = false
  for (let t = 0; t < time; t++) {
    if (t === 0) {
      result.push(arrayRoad.join(''))
      continue
    }
    let santaLocation = arrayRoad.indexOf('S')
    if (arrayRoad[santaLocation + 1] != '|') {
      if (arrayRoad[santaLocation + 1] === '*') {
        overDoor
          ? (arrayRoad[santaLocation] = '*')
          : (arrayRoad[santaLocation] = '.')
        overDoor = true
      } else {
        arrayRoad[santaLocation] = overDoor ? '*' : arrayRoad[santaLocation + 1]
        overDoor = false
      }
      arrayRoad[santaLocation + 1] = 'S'
    }
    result.push(arrayRoad.join(''))
    if (t === 4) {
      arrayRoad = arrayRoad.join('').replaceAll('|', '*').split('')
    }
  }
  return result
}

// Solución de ChatGPT
/*
function cyberReindeer(road, time) {
  const result = [];
  let arrayRoad = road.split('');
  let overDoor = false;

  for (let t = 0; t < time; t++) {
    if (t === 0) {
      result.push(arrayRoad.join(''));
      continue;
    }

    const santaLocation = arrayRoad.indexOf('S');
    const nextLocation = arrayRoad[santaLocation + 1];

    if (nextLocation !== '|' && nextLocation !== undefined) {
      if (nextLocation === '*') {
        arrayRoad[santaLocation] = overDoor ? '*' : '.';
        overDoor = true;
      } else {
        arrayRoad[santaLocation] = overDoor ? '*' : nextLocation;
        overDoor = false;
      }
      arrayRoad[santaLocation + 1] = 'S';
    }

    result.push(arrayRoad.join(''));

    if (t === 4) {
      arrayRoad = arrayRoad.join('').replaceAll('|', '*').split('');
    }
  }
  return result;
}
*/
console.log(cyberReindeer('S..|..||.....', 10))
