module.exports.fourNumberSum = fourNumberSum

function fourNumberSum(array, targetSum) {
  // [7,6,4,1,-1,2]
  let cuadruplets = []
  let sums = { }
  for (let i = 0; i < array.length; i++) {
    evaluateRight(i, array, targetSum, sums, cuadruplets)
    sums = evaluateLeft(i, array, sums, cuadruplets )
  }
  // 1 - Evaluate to right
  // 2 - Evaluate to left

  return cuadruplets
}

function evaluateRight( i, array, targetSum, sums, cuadruplets ) {
  for (let j = i + 1; j < array.length; j++) {
    let p = targetSum - (array[i] + array[j])
    if (p in sums) {
      for (let index = 0; index < sums[p].length; index++) {
        cuadruplets.push(sums[p][index].concat([ array[i], array[j] ]))
      }
    }
  }
}

function evaluateLeft(i, array, sums, cuadruplets) {
  // create or push if not in sums
  for (let j = i - 1; j >= 0; j--) {
    let q = array[i] + array[j]
    if (q in sums) {
      sums[q].push([ array[j], array[i] ])
    } else {
      sums[q] = []
      sums[q].push([ array[j], array[i] ])
    }
  }
  console.log({i, array, sums, cuadruplets })
  return sums
}