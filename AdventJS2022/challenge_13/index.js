function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(
      changes.filter((change) => change[1] > lastBackup).map((c) => c[0])
    ),
  ].sort((a, b) => a - b)
}

const lastBackup = 1546300800
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
// El archivo con id 1 ha sido modificado dos veces
// después del último backup.

// El archivo con id 2 no ha sido modificado después
// del último backup.

// El archivo con id 3 ha sido modificado una vez
// después del último backup.

// Tenemos que hacer una copia de seguridad
// de los archivos 1 y 3.
