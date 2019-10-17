
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

function minNumberOfJumpsV2(array) {
  let maxReach = array[0]
  let steps = array[0]
  let jumps = 0
  for (let i = 0; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, array[i] + i )
    steps -= 1
    if (steps === 0) {
      jumps += 1
      steps = maxReach - i
    }
  }
  return jumps + 1
}

exports.minNumberOfJumpsV2 = minNumberOfJumpsV2