module.exports.searchInSortedMatrix = searchInSortedMatrix

function searchInSortedMatrix(matrix, target) {
  // Go to last column of first row
  let currentPosition = [ 0 , matrix[0].length - 1]

  while ( currentPosition[0] <= matrix.length - 1 && currentPosition[1] >= 0 ) {
    console.log(currentPosition)

    // If exit search if target found
    if (target === matrix[currentPosition[0]][currentPosition[1]]) {
      break
    }
    // If target is smaller than position
    // move position to left column
    if (target < matrix[currentPosition[0]][currentPosition[1]]) {
      currentPosition[1]--
      continue
    }
    // If target is bigger than position
    // move pistion to lower row
    if (target > matrix[currentPosition[0]][currentPosition[1]]) {
      currentPosition[0]++
    }

  }
  console.log(currentPosition)
  if (currentPosition[0] > matrix.length - 1 || currentPosition[1] < 0) {
    currentPosition = [ -1, -1 ]
  }
  console.log(currentPosition)
  return currentPosition
}