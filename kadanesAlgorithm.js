exports.kadanesAlgorithm = kadanesAlgorithm

function kadanesAlgorithm(array) {
  let maxEndingHere = array[0]
  let maxSoFar = array[0]

  for (let i = 1; i < array.length; i++) {
    maxEndingHere = Math.max(array[i] ,array[i] + maxEndingHere )
    maxSoFar = Math.max(maxSoFar, maxEndingHere )
  }
  return maxSoFar
}
