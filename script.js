let bareme = [
  [0, 10064, 0],
	[10064, 25659, 11],
	[25659, 73369, 30],
	[73369, 157806, 41],
	[157806, 999999999, 45]
]

let imposition = function(sum) {
  let imp = []
	bareme.forEach( e => {
    let part = intersect(sum, e)
    let pre = part * e[2] / 100
    imp.push([
      bar.indexOf(e),
      part,
      e[2],
      pre
    ])
  })
  imp.forEach( t => {
    console.log(t)
  })
}

let intersect = function(sum, interval) {
    return Math.min(Math.max(sum - interval[0], 0), interval[1])
}
