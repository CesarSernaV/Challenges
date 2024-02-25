function organizeChristmasDinner(dishes) {
  const ingredientPlates = {}

  dishes.forEach((dish) => {
    const plate = dish[0]
    const ingredients = dish.slice(1)

    ingredients.forEach((ingredient) => {
      if (ingredientPlates[ingredient]) {
        ingredientPlates[ingredient].push(plate)
      } else {
        ingredientPlates[ingredient] = [plate]
      }
    })
  })

  const repeatedIngredients = Object.entries(ingredientPlates)
    .filter(([ingredient, plates]) => plates.length >= 2)
    .sort(([ingredientA], [ingredientB]) =>
      ingredientA.localeCompare(ingredientB)
    )

  const result = repeatedIngredients.map(([ingredient, plates]) => {
    return [ingredient, ...plates.sort()]
  })

  return result
}

const dishes = [
  ['christmas turkey', 'turkey', 'sauce', 'herbs'],
  ['cake', 'flour', 'sugar', 'egg'],
  ['hot chocolate', 'chocolate', 'milk', 'sugar'],
  ['pizza', 'sauce', 'tomato', 'cheese', 'ham'],
]

const organizedDinner = organizeChristmasDinner(dishes)
console.log(organizedDinner)
