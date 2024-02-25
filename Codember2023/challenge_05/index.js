import { readFile } from 'fs/promises'

const inputString = await readFile(
  './challenge_05/database_attacked.txt',
  'utf8'
)

const validateUser = (user) => {
  const columns = user.split(',')

  const id = columns[0].trim()
  const username = columns[1].trim()
  const email = columns[2].trim()
  const age = columns[3] ? columns[3].trim() : ''
  const location = columns[4] ? columns[4].trim() : ''

  if (!id || !/^\w+$/.test(id)) {
    return false
  }

  if (!username || !/^\w+$/.test(username)) {
    return false
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return false
  }

  if (age && isNaN(age.trim())) {
    return false
  }

  if (location && typeof location !== 'string') {
    return false
  }

  return true
}
const getHideMessage = () => {
  const users = inputString.split('\n')
  let invalidUsers = []
  let hideMessage = ''
  for (let user of users) {
    let isValidUser = validateUser(user)
    // console.log('user: ' + user + ' isValid: ' + isValidUser)
    if (!isValidUser) {
      invalidUsers.push(user)
    }
  }
  // console.log(invalidUsers)
  for (let invalidUser of invalidUsers) {
    let username = invalidUser.split(',')[1]
    hideMessage += username.split('')[0]
  }
  return hideMessage
}

console.log('Result: ' + getHideMessage())
