module.exports.subarraySort = subarraySort

function subarraySort(array) {
  let minOutOfOrder = Infinity
  let maxOutOfOrder = -Infinity

  for (let i = 0; i < array.length; i++) {
    const num = array[i]
    if ( isOutOfOrder(num, i, array) ) {
      minOutOfOrder = Math.min(minOutOfOrder, num)
      maxOutOfOrder = Math.max(maxOutOfOrder, num)
    }
  }
  console.log( minOutOfOrder, maxOutOfOrder )
  if (minOutOfOrder === Infinity) {
    return [ -1, -1 ]
  }

  let subarrayLeftIndex = 0
  while ( minOutOfOrder >= array[subarrayLeftIndex] ) {
    subarrayLeftIndex++
  }

  let subarrayRightIndex  = array.length - 1
  while ( maxOutOfOrder <= array[subarrayRightIndex] ) {
    subarrayRightIndex--
  }

  return [ subarrayLeftIndex, subarrayRightIndex ]
}

function isOutOfOrder(num,i ,array) {
  if ( i === 0 ) {
    return num > array[ i + 1 ]
  }

  if ( i === array.length - 1 ) {
    return num < array[ i - 1 ]
  }
  return num > array[ i + 1 ] || num < array[ i - 1 ]
}