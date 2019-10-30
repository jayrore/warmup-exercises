
function findThreeLargestNumbers(array) {
  let threeLargestNumbers = [null, null, null]
  for (let num of array) {
    updateThreeLargest(threeLargestNumbers, num)
  }
  return threeLargestNumbers
}

function updateThreeLargest(array, num) {
  if (array[2] == null || num > array[2]) {
    shiftAndUpdate(array, num, 2)
  }
  else if (array[1] == null || num > array[1]) {
    shiftAndUpdate(array, num, 1)
  }
  else if (array[0] == null || num > array[0]) {
    shiftAndUpdate(array, num, 0)
  }
}

function shiftAndUpdate(array, num, idx ) {
  for (let i = 0; i <= idx; i++) {
    if ( i === idx) {
      array[idx] = num
    } else {
      array[i] = array[i + 1]
    }
  }
}

exports.findThreeLargestNumbers = findThreeLargestNumbers