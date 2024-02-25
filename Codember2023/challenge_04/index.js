import { readFile } from 'fs/promises'

const inputString = await readFile(
  './challenge_04/files_quarantine.txt',
  'utf8'
)

const getUnchecksum = (name) => {
  const frequency = {}
  const uniqueCharacters = []

  for (const char of name) {
    frequency[char] = (frequency[char] || 0) + 1
    if (frequency[char] === 1) {
      uniqueCharacters.push(char)
    } else {
      const index = uniqueCharacters.indexOf(char)
      if (index !== -1) {
        uniqueCharacters.splice(index, 1)
      }
    }
  }

  return uniqueCharacters.join('')
}

const findRealFile = (order) => {
  const files = inputString.split('\n')
  let correctFiles = []
  for (let file of files) {
    let name = file.split('-')[0]
    let fileUnchecksum = file.split('-')[1]
    let correctUnchecksum = getUnchecksum(name)
    if (fileUnchecksum === correctUnchecksum) {
      correctFiles.push(correctUnchecksum)
    }
    if (correctFiles.length === order) {
      // console.log(
      //   `nombre: ${name} check1: ${fileUnchecksum} check2: ${correctUnchecksum}`
      // )
      return correctUnchecksum
    }
  }
}

console.log(findRealFile(33))
