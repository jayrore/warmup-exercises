module.exports.largestRange = largestRange

function largestRange(array) {
  let numbersMap = {}
  let biggestRangeLength = 0
  let biggestRange = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    // false means this number is not part of a range yet
    numbersMap[element] = false
  }

  for (let i = 0; i < array.length; i++) {
    const number = array[i]
    // const newRange = [ number ]
    let left  = number - 1
    let right = number + 1
    let currentLength = 1
    // next loop if number is part of a range
    if (numbersMap[number] === true) {
      continue
    }

    numbersMap[number] === true
    // newRange.unshift(number)
    // newRange.push(number)

    // << search to back
    // let firstNumber = number - 1
    // while ( firstNumber in numbersMap ) {
    while ( left in numbersMap ) {
      // newRange.unshift(firstNumber)
      numbersMap[left] = true
      left--
      currentLength++
    }

    // >> search to front
    // let lastNumber  = number + 1
    while ( right in numbersMap ) {
      // newRange.push(lastNumber)
      numbersMap[right] = true
      right++
      currentLength++
    }

    if (currentLength > biggestRangeLength) {
      biggestRangeLength = currentLength
      biggestRange = [ left + 1, right - 1 ]
    }
  }

  return biggestRange
}