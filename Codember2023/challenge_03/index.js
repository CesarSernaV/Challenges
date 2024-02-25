import {readFile} from 'fs/promises'

const inputString = await readFile('./challenge_03/encryption_policies.txt', 'utf8')

const validatePass = ({
  min,
  max,
  character,
  pass
}) =>{
  const numbCharacters = pass.split('').reduce((count, currentCharacter) =>{
    if(currentCharacter === character)
      count+=1
    return count
  },0)
  if(numbCharacters >= min &&  numbCharacters <= max)
    return true
  return false
}

const getParamsRule = (rule) =>{
  const minMaxRule =  rule.split(' ')
  const minMax = minMaxRule[0].split('-')
  const character = minMaxRule[1]
  const min = minMax[0]
  const max = minMax[1]

  return {
    min,max, character
  }
}

const findInvalidPass = (passwords) =>{
  const codes = passwords.split('\n')
  let invalidPasswords = []
  codes.forEach(codex => {
    const decodex = codex.split(': ')
    const { min, max, character} = getParamsRule(decodex[0])
    const pass = decodex[1]
    if(!validatePass({min,max,character, pass}))
      invalidPasswords.push(pass)
  });
  console.log(invalidPasswords[12])
}

findInvalidPass(inputString);