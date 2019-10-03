class MaxHeap {
  constructor(array) {
    this.heap = this.buildHeap(array)
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2)
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx-- ) {
      this.siftDown(currentIdx, array.length - 1, array)
    }
    return array
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1
    // Loop until childOneIdx is not out of bounds of heap
    while (childOneIdx <= endIdx) {
      let childTwoIdx = (currentIdx * 2 + 2) <= endIdx ? currentIdx * 2 + 2 : -1
      let idxToSwap
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx] ) {
        idxToSwap = childTwoIdx
      } else {
        idxToSwap = childOneIdx
      }
      if ( heap[idxToSwap] < heap[currentIdx] ) {
        // swap idxs
        this.swap(idxToSwap, currentIdx ,heap)
        // Move idx to swaped node
        currentIdx = idxToSwap
        // select child index of the recent child idx
        childOneIdx = currentIdx * 2 + 1
      } else {
        return
      }

    }
  }

  swap(i, j, heap) {
    let temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2)
    while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
      this.swap(currentIdx, parentIdx, heap)
      currentIdx = parentIdx
      parentIdx = Math.floor((currentIdx - 1) / 2)
    }
  }


  peek() {
    return this.heap[0]
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const valueToRemove = this.heap.pop()
    this.siftDown(0, this.heap.length - 1, this.heap)
    return valueToRemove
  }

  insert(value) {
    this.heap.push( value )
    this.siftUp( this.heap.length - 1 , this.heap )
  }
}

// Do not edit the line below.
exports.MaxHeap = MaxHeap