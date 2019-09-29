
function minNumberOfJumps(array) {
  let jumps = new Array(array.length).fill(Infinity)
  jumps[0] = 0

  for (let i = 1; i < array.length; i++) {
    updateJumps(array, jumps, i)
  }
  // console.log(jumps)
  return jumps.pop()
}

function updateJumps(array, jumps, i) {
  for (let j = 0; j < i; j++) {
    if ( array[j] + j >= i ) {
      jumps[i] = Math.min(jumps[j] + 1, jumps[i])
    }
  }
}

exports.minNumberOfJumps = minNumberOfJumps
