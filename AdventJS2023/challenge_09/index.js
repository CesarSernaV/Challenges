function adjustLights(lights) {
  let opposites = []
  opposites['🔴'] = '🟢'
  opposites['🟢'] = '🔴'
  let result = 0
  lights = lights.reverse()
  lights.reduce((acc, item) => {
    if (acc === item) {
      result++
      return opposites[acc]
    }
    return item
  })
  return result
}
console.log(
  adjustLights([
    '🔴',
    '🔴',
    '🟢',
    '🔴',
    '🟢',
    '🔴',
    '🟢',
    '🔴',
    '🟢',
    '🔴',
    '🟢',
    '🔴',
    '🟢',
    '🔴',
    '🟢',
    '🔴',
    '🟢',
  ])
)
