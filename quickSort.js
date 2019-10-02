
function quickSort(array = []) {
  quickSortHelper(array, 0, array.length - 1)
  return array
}

function quickSortHelper(array = [], startIdx = 0 , endIdx ) {
  if ( startIdx >= endIdx ) {
    return
  }
  let pivotIndex = startIdx
  let leftIdx    = startIdx + 1
  let rightIdx   = endIdx

  while ( rightIdx >= leftIdx) {
    if ( array[leftIdx] > array[pivotIndex] && array[rightIdx] < array[pivotIndex] ) {
      swap(array, leftIdx, rightIdx)
    }

    if ( array[leftIdx] <= array[pivotIndex]) {
      leftIdx++
    }

    if ( array[rightIdx] >= array[pivotIndex]) {
      rightIdx--
    }
  }

  swap(array, pivotIndex, rightIdx)

  let isLeftSubArrayIsSmaller = ( ( rightIdx - 1 ) - startIdx < endIdx - ( rightIdx + 1 ) )

  if ( isLeftSubArrayIsSmaller ) {
    quickSortHelper( array, startIdx, rightIdx - 1 )
    quickSortHelper( array, rightIdx + 1, endIdx)
  } else {
    quickSortHelper( array, rightIdx + 1, endIdx)
    quickSortHelper( array, startIdx, rightIdx - 1 )
  }

}

function swap(array, idxA, idxB ) {
  let temp          = array[idxA]
  array[ idxA ]  = array[ idxB ]
  array[ idxB ] = temp
}

exports.quickSort = quickSort