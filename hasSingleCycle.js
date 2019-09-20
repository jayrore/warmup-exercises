exports.hasSingleCycle = hasSingleCycle

function hasSingleCycle(array) {
  let numElementsVisisted  = 0
  let currentIdx = 0

  while ( numElementsVisisted < array.length ) {
    if ( numElementsVisisted > 0 && currentIdx == 0) {
      return false
    }
    numElementsVisisted++
    currentIdx = getNextIdx(currentIdx, array)
  }

  return currentIdx === 0
}

function getNextIdx( currentIdx, array ) {
  const jump = array[currentIdx]
  const nextIdx = (currentIdx + jump) % array.length

  return nextIdx >= 0 ? nextIdx : nextIdx + array.length
}