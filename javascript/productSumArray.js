
function productSumArray(array) {
  return productSumArrayHandle(array, 1)
}

function productSumArrayHandle(array, depth) {
  let sum = 0
  for (const number of array) {
    if (Array.isArray(number)) {
      sum += productSumArrayHandle(number, depth + 1)
    } else {
      sum += number
    }
  }
  return depth * sum
}

module.exports = productSumArray
