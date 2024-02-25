function fixLetter(letter) {
  letter = letter.trim()
  letter = letter.replace(/,/g, ', ')
  letter = letter.replace(/\s+([,.])/g, '$1')
  letter = letter.replace(/\?+/g, '?')
  letter = letter.replace(
    /\.\s+([a-z])/g,
    (match, p1) => '. ' + p1.toUpperCase()
  )
  letter = letter.replace(
    /\?\s+([a-z])/g,
    (match, p1) => '? ' + p1.toUpperCase()
  )
  letter = letter.replace(
    /!\s+([a-z])/g,
    (match, p1) => '! ' + p1.toUpperCase()
  )
  letter = letter.charAt(0).toUpperCase() + letter.slice(1)
  letter = letter.replace(/\s+/g, ' ')
  letter = letter.replace(/santa claus/gi, 'Santa Claus')
  if (!letter.endsWith('.') && !letter.endsWith('?') && !letter.endsWith('!')) {
    letter += '.'
  }
  letter = letter.replace(/\s+\?/g, '?')
  return letter
}

fixLetter(
  ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
)
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

fixLetter(
  "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"
)
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?
