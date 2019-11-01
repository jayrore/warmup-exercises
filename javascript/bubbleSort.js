
function bubbleSort(array) {
  let counter = 0
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        sorted =  false
      }
    }
  }
  return array
}

function swap(array, i, j) {
  let tmp = array[j]
  array[j] = array[i]
  array[i] = tmp
}

exports.bubbleSort = bubbleSort