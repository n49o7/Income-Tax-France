let bareme = [
  [0, 10064, 0],
  [10064, 25659, 11],
  [25659, 73369, 30],
  [73369, 157806, 41],
  [157806, 999999999, 45]
]

let imposition = function(sum) {
  let resultat = []
	bareme.forEach( tranche => {
    let part = intersect(sum, tranche)
    let montant = part * tranche[2] / 100
    imp.push([
      bar.indexOf(tranche),
      part,
      tranche[2],
      montant
    ])
  })
  return resultat
}

let intersect = function(sum, interval) {
    return Math.min(Math.max(sum - interval[0], 0), interval[1])
}
