
function binarySearch(array, target) {
  return binarySearchHandle(array, target, 0, array.length - 1)
}

function binarySearchHandle(array, target, left, right) {
  if ( left > right ) { return -1 }
  let middle = Math.floor((left + right) / 2)

  if ( array[ middle ] === target ) { return middle }

  if ( target > array[ middle ] ) {
    return binarySearchHandle(array, target, middle + 1, right)
  } else {
    return binarySearchHandle(array, target, left, middle - 1)
  }
}

module.exports = binarySearch