
function twoNumberSum(array, target) {
  array.sort((a,b)=>( a - b ))
  let left = 0
  let right = array.length - 1
  let sum = 0
  while (left < right) {
    sum = array[left] + array[right]
    if ( sum === target) { return [array[left], array[right]] }
    else if ( sum < target ) { left += 1 }
    else if ( sum > target ) { right -= 1 }
  }

  return []
}

exports.twoNumberSum = twoNumberSum