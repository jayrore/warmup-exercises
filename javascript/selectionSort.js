function selectionSort( array ) {
  let startIdx = 0
  while (startIdx < array.length - 1) {
    let smallerIdx = startIdx
    for (let i = smallerIdx + 1; i < array.length; i++) {
      if (array[i] < array[smallerIdx]) {
        smallerIdx = i
      }
    }
    swap(smallerIdx, startIdx, array)
    startIdx += 1
  }
  return array
}

function swap(i, j, array) {
  let tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
}
exports.selectionSort = selectionSort