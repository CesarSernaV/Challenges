function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let mergedIntervals = []
  for (let i = 0; i < intervals.length; i++) {
    if (
      mergedIntervals.length === 0 ||
      mergedIntervals[mergedIntervals.length - 1][1] < intervals[i][0]
    ) {
      mergedIntervals.push(intervals[i])
    } else {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
        mergedIntervals[mergedIntervals.length - 1][1],
        intervals[i][1]
      )
    }
  }

  return mergedIntervals
}

console.log(
  optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4],
  ])
) // [[2, 8]]
console.log(
  optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
  ])
) // [[1, 6], [8, 10]]
console.log(
  optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6],
  ])
) // [[1, 2], [3, 4], [5, 6]]
