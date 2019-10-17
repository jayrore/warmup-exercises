
function zigzagTraverse(array) {
  let row = 0
  let col = 0
  let direction = 0 // 0 = down, 1 = up
  let result = []
  const height = array.length - 1
  const width = array[0].length - 1
  while (!outOfBounds(row, col, height, width)) {
    result.push(array[row][col])
    // if Up
    if (direction) {
      if (row === 0 || col === width) {
        // Go Down
        direction = 0
        if (col === width) {
          row++
        } else {
          col++
        }
      } else {
        row--
        col++
      }
    }
    // If Down
    else {
      // If touched one of the corners
      if ( col === 0 || row === height  ) {
        // Go Up
        direction = 1
        if (row === height) {
          // If is at last row of array move
          col++
        } else {
          // If is at first row
          row++
        }
      } else {
        col--
        row++
      }
    }
  }

  return result
}

function outOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col > width
}


exports.zigzagTraverse = zigzagTraverse