function createCube(size) {
  let cube = ''
  let heigth = size * 2
  let spaces = size - 1
  let shapes = ['/', '\\', '\\_', '_/', '\\', '\n', ' ']
  for (let i = heigth; i > 0; i--) {
    if (i > size) {
      if (spaces > 0) cube += ' '.repeat(spaces)
      if (i === heigth) cube += shapes[0]
      if (i != heigth)
        cube += (shapes[0] + shapes[1]).repeat(size - 1 - spaces) + shapes[0]
      cube += shapes[2].repeat(size) + shapes[4] + shapes[5]
      spaces--
    }
    if (i <= size) {
      if (spaces > 0) cube += shapes[6].repeat(spaces)
      if (i != heigth) cube += (shapes[1] + shapes[0]).repeat(size - 1 - spaces)
      cube += shapes[3].repeat(size) + shapes[5] + shapes[6]
      spaces++
    }
  }
  cube = cube.substring(0, cube.length - 2)
  return cube
}

const cube = createCube(3)
// /\_\_\_\
// /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
// \/\/_/_/_/
//  \/_/_/_/
