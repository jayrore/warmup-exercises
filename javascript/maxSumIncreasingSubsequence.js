
function maxSumIncreasingSubsequence(array) {
  let sums = [ ...array ]
  let sequences = (new Array(array.length)).fill(null)
  let maxSumIdx = 0

  for ( let i = 0; i < array.length ; i++) {
    let currentNum = array[i]
    for ( let j = 0; j < i; j++ ) {
      let otherNum = array[j]
      if (otherNum < currentNum) {
        if (sums[j] + currentNum >= sums[i]) {
          sums[i] = sums[j] + currentNum
          sequences[i] = j
        }
      }
    }
    if ( sums[i] > sums[maxSumIdx]) {
      maxSumIdx = i
    }
  }

  return [ sums[maxSumIdx], buildSequence(maxSumIdx, array, sequences) ]
}

function buildSequence(maxSumIdx, array, sequences) {
  let sequence = []
  while (maxSumIdx !== null) {
    sequence.unshift(array[maxSumIdx])
    maxSumIdx = sequences[maxSumIdx]
  }
  return sequence
}

exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence