function heapSort(array) {
  buildHeap(array)
  for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
    swap(0, endIdx, array)
    siftDown(0, endIdx - 1, array)
  }
  return array
}

function buildHeap(array) {
  const firstParentIdx = Math.floor((array.length - 2) / 2)
  for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx-- ) {
    siftDown(currentIdx, array.length - 1, array)
  }
  return array
}

function siftDown(currentIdx, endIdx, heap) {
  let childOneIdx = currentIdx * 2 + 1
  // Loop until childOneIdx is not out of bounds of heap
  while (childOneIdx <= endIdx) {
    let childTwoIdx = (currentIdx * 2 + 2) <= endIdx ? currentIdx * 2 + 2 : -1
    let idxToSwap
    // change > to < in case of min heap
    if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx] ) {
      idxToSwap = childTwoIdx
    } else {
      idxToSwap = childOneIdx
    }
    // change > to < in case of min heap
    if ( heap[idxToSwap] > heap[currentIdx] ) {
      // swap idxs
      swap(idxToSwap, currentIdx ,heap)
      // Move idx to swaped node
      currentIdx = idxToSwap
      // select child index of the recent child idx
      childOneIdx = currentIdx * 2 + 1
    } else {
      return
    }

  }
}

function swap(i, j, array) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

exports.heapSort = heapSort