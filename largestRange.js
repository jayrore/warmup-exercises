module.exports.largestRange = largestRange

function largestRange(array) {
  let numbersMap = {}
  let biggestRange = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    // false means this number is not part of a range yet
    numbersMap[element] = false
  }

  for (let i = 0; i < array.length; i++) {
    const number = array[i]
    const newRange = [ number ]
    // next loop if number is part of a range
    if (numbersMap[number] === true) {
      continue
    }

    // << search to back
    let firstNumber = number - 1
    while (numbersMap.hasOwnProperty(firstNumber)) {
      newRange.unshift(firstNumber)
      firstNumber--
    }

    // >> search to front
    let lastNumber  = number + 1
    while (numbersMap.hasOwnProperty(lastNumber)) {
      newRange.push(lastNumber)
      lastNumber++
    }

    numbersMap[number] === true

    if (newRange.length > biggestRange.length) {
      biggestRange = newRange
    }
  }

  return [biggestRange.shift(), biggestRange.pop() ]
}