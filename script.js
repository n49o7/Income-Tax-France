let brackets = [
  [0, 10064, 0],
  [10064, 25659, 11],
  [25659, 73369, 30],
  [73369, 157806, 41],
  [157806, 999999999, 45]
]

let tax = function(sum) {
  let result = []
  brackets.forEach( e => {
    let part = intersect(sum, e)
    let tax = part * e[2] / 100
    result.push([
      brackets.indexOf(e),
      part,
      e[2],
      tax
    ])
  })
  return result
}

let intersect = function(sum, interval) {
  return Math.min(Math.max(sum - interval[0], 0), interval[1])
}

let taxSum = function(sum) {
  let results = tax(sum)
  return results.reduce((a, b) => a + (b[3] || 0), 0)
}