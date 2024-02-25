function getCompleted(part, total) {
  let getSecondsFromTimeString = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number)
    return hours * 3600 + minutes * 60 + seconds
  }

  let simplifyFraction = (numerator, denominator) => {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
    const divisor = gcd(numerator, denominator)
    return {
      numerator: numerator / divisor,
      denominator: denominator / divisor,
    }
  }
  const workedSeconds = getSecondsFromTimeString(part)
  const totalSeconds = getSecondsFromTimeString(total)

  const fraction = simplifyFraction(workedSeconds, totalSeconds)

  return `${fraction.numerator}/${fraction.denominator}`
}

getCompleted('01:00:00', '03:00:00') // '1/3'
getCompleted('02:00:00', '04:00:00') // '1/2'
getCompleted('01:00:00', '01:00:00') // '1/1'
getCompleted('00:10:00', '01:00:00') // '1/6'
getCompleted('01:10:10', '03:30:30') // '1/3'
getCompleted('03:30:30', '05:50:50') // '3/5
