function calculateTime(deliveries) {
  const limiteTiempo = '07:00:00'
  const limiteTiempoArray = limiteTiempo.split(':')
  const limiteTotalSegundos =
    +limiteTiempoArray[0] * 3600 +
    +limiteTiempoArray[1] * 60 +
    +limiteTiempoArray[2]

  let tiempoRestante =
    limiteTotalSegundos -
    deliveries.reduce((sum, delivery) => {
      const tiempoEntrega = delivery.split(':')
      return (
        sum +
        +tiempoEntrega[0] * 3600 +
        +tiempoEntrega[1] * 60 +
        +tiempoEntrega[2]
      )
    }, 0)

  const signo = tiempoRestante <= 0 ? '' : '-'
  tiempoRestante = Math.abs(tiempoRestante)
  const horas = Math.floor(tiempoRestante / 3600)
  const minutos = Math.floor((tiempoRestante % 3600) / 60)
  const segundos = tiempoRestante % 60

  const tiempoFormateado = `${signo}${(horas < 10 ? '0' : '') + horas}:${
    (minutos < 10 ? '0' : '') + minutos
  }:${(segundos < 10 ? '0' : '') + segundos}`

  return tiempoFormateado
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00'])) // '-02:20:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])) // '00:30:00'
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])) // '-05:29:00'
