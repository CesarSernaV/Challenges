function getIndexsForPalindrome(word) {
  const reverseWord = word.split('').reverse().join('')
  if (word === reverseWord) return []
  let result = []
  for (let i = 0; i < reverseWord.length; i++) {
    if (reverseWord[i] !== word[i]) {
      result.push([i, word.indexOf(reverseWord[i])])
    }
  }

  for (let indexes of result) {
    let temp = word.split('')
    let tempChar = temp[indexes[0]]
    temp[indexes[0]] = temp[indexes[1]]
    temp[indexes[1]] = tempChar

    let newWord = temp.join('')
    let reverseNewWord = temp.reverse().join('')
    if (newWord === reverseNewWord) return indexes
  }
  return null
}
/* Solución de GPT */
// function getIndexsForPalindrome(word) {
//   const isPalindrome = (s) => s === s.split('').reverse().join('');

//   if (isPalindrome(word)) {
//     return [];
//   }

//   const len = word.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       const modifiedStr = word.substring(0, i) + word[j] + word.substring(i + 1, j) + word[i] + word.substring(j + 1);
//       if (isPalindrome(modifiedStr)) {
//         return [i, j];
//       }
//     }
//   }

//   return null;
// }

console.log(getIndexsForPalindrome('rotavator'))
