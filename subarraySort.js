module.exports.subarraySort = subarraySort

function subarraySort(array) {
  let indexCheck = []
  let subArray = [ -1, -1 ]
  for (let i = array.length - 1; i >= 0; i--) {
    let isSorted = true
    // Check if element is bigger than previous
    if ( i > 0 ) {
      isSorted = ( array[i] >= array[i - 1] ) && isSorted
    }
    // Check if element is smaller than next
    if ( i < array.length - 1 ) {
      isSorted = ( array[i] <= array[i + 1] ) && isSorted
    }

    if (!isSorted && indexCheck.length === 0 ) {
      subArray[1] = i
    }
    else if (isSorted && indexCheck.length > 1 ) {
      // check if subArray[1] fits here
      if ( array[subArray[1]] >= array[i - 1] && array[subArray[1]] < array[i + 1] ) {
        subArray[0] = i
      }
    }
    else if (!isSorted && indexCheck.length > 1 ) {
      subArray[0] = i
    }
    if (!isSorted) {
      indexCheck.push(i)
    }

  }
  return subArray
}