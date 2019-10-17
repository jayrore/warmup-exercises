
module.exports.getPermutations = getPermutations

function getPermutations(array) {
  let permutations = []
  getPermutationsHelper(0, array, permutations)
  return permutations
}

function getPermutationsHelper(i, array, permutations) {
  // If there is only one element in array
  // console.log('0->', i, array, permutations)
  if (i === array.length - 1) {
    // add single element as permutation
    // console.log('1->', i, array, permutations)
    permutations.push(array.slice())
    // console.log('3->', i, array, permutations)
  } else {
    for (let j = i; j < array.length; j++) {
      // console.log('2->', i, j, array, permutations)
      swap(i, j,  array)
      getPermutationsHelper(i + 1, array, permutations )
      swap(i, j,  array)
    }
  }

}

function swap( i, j, array ) {
  let tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}