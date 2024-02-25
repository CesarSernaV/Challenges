function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false

  const downgradeOrder = ['#', '+', ':', '.', ' ']
  const regexDowngrade = new RegExp(`[${downgradeOrder.join('')}]`)
  for (let i = 0; i < original.length; i++) {
    const originalChar = original[i]
    const copyChar = copy[i]

    if (originalChar === copyChar) continue
    if (/[A-Z]/.test(originalChar) && copyChar === originalChar.toLowerCase())
      continue
    if (/[a-zA-Z]/.test(originalChar) && regexDowngrade.test(copyChar)) continue
    if (originalChar === ' ' && copyChar === ' ') continue
    if (regexDowngrade.test(originalChar) && regexDowngrade.test(copyChar)) {
      if (
        downgradeOrder.indexOf(originalChar) < downgradeOrder.indexOf(copyChar)
      )
        continue
    }
    return false
  }

  return true
}

console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:')) // true
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')) // false
console.log(checkIsValidCopy('Santa Claus', '###:. c:+##')) // true
