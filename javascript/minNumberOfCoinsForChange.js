
module.exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange

function minNumberOfCoinsForChange(change, coins) {
  let arrayOfChange = (new Array(change + 1)).fill(Infinity)
  arrayOfChange[0] = 0

  for (let i = 0; i <= coins.length; i++) {
    const coin = coins[i]
    for (let j = 1; j < arrayOfChange.length; j++) {
      if ( coin <= j) {
        arrayOfChange[j] = Math.min(arrayOfChange[j] , (1 + arrayOfChange[ j - coin ]))
      }
    }
  }
  return arrayOfChange[ change ] !== Infinity ? arrayOfChange[ change ] : -1
}