function getOptimalPath(path) {
  let dp = []
  for (let i = 0; i < path.length; i++) {
    dp.push(new Array(path[i].length).fill(0))
  }

  for (let i = path.length - 1; i >= 0; i--) {
    for (let j = 0; j < path[i].length; j++) {
      if (i === path.length - 1) {
        dp[i][j] = path[i][j]
      } else {
        dp[i][j] = path[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
      }
    }
  }

  return dp[0][0]
}

getOptimalPath([[0], [2, 3]]) // 2
// 0 -> 2

getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
// 0 -> 4 -> 1

getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
// 1 -> 1 -> 5 -> 1
