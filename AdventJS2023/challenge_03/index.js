function findNaughtyStep(original, modified) {
  if (original.length > modified.length) {
    for (let index = 0; index < original.length; index++) {
      if (modified[index] !== original[index]) return original[index]
    }
  }
  if (modified.length > original.length) {
    for (let index = 0; index < modified.length; index++) {
      if (original[index] !== modified[index]) return modified[index]
    }
  }
  for (let index = 0; index < original.length; index++) {
    if (original[index] !== modified[index]) return original[index]
  }
  return ""
}

console.log(findNaughtyStep("abcde", "abcd"))
