function checkPart(part) {
  let isPalindrome = (str) => {
    // Convertimos la cadena a minúsculas
    const lowerStr = str.toLowerCase()

    for (let i = 0; i < lowerStr.length / 2; i++) {
      if (lowerStr[i] !== lowerStr[lowerStr.length - 1 - i]) return false
    }

    return true
  }

  if (isPalindrome(part)) return true

  for (let i = 0; i < part.length; i++) {
    const newPart = part.slice(0, i) + part.slice(i + 1)
    if (isPalindrome(newPart)) return true
  }

  return false
}

checkPart('uwu') // true
// "uwu" es un palíndromo sin eliminar ningún carácter

checkPart('miidim') // true
// "miidim" puede ser un palíndromo después de eliminar la primera "i"
// ya que "midim" es un palíndromo

checkPart('midu') // false
// "midu" no puede ser un palíndromo después de eliminar un carácter
