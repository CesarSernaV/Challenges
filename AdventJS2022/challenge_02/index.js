function countHours(year, holidays) {
  let extraHours = 0
  for (let holiday of holidays) {
    let splitHoliday = holiday.split('/')
    let day = new Date(year, splitHoliday[0] - 1, splitHoliday[1]).getDay()
    if (day > 0 && day < 6) {
      extraHours++
    }
  }
  return extraHours * 2
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año
