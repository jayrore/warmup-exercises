module.exports.numbersOfWaysToMakeChange = numbersOfWaysToMakeChange

function numbersOfWaysToMakeChange(n, denoms) {
  let ways = new Array( n + 1 ).fill(0)
  ways[0] = 1

  for (let denom in denoms) {
    for ( let amount = 1; amount < n + 1 ; amount++ ) {
      if ( denom <= amount ) {
        ways[ amount ] += ways[ amount - denom ]
      }
    }
  }

  return ways[n]
}
