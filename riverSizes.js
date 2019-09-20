module.exports.riverSizes = riverSizes

function riverSizes( matrix ) {
  let sizes = []
  let visited = matrix.map( row => row.map(() => false) )
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if ( visited[row][col] ) { continue }
      traverseNode( row, col, matrix, visited, sizes )
    }
  }

  return sizes
}


function traverseNode(row , col , matrix, visited, sizes) {
  let nodesToExplore = [[row, col]]
  let countRiverSize = 0
  // While there are other neighborg nodes to explore
  while (nodesToExplore.length) {
    // Start exploring current node
    let currentNode = nodesToExplore.pop()
    row = currentNode[0]
    col = currentNode[1]
    // If this node is has been visited do nothing
    if ( visited[row][col] ) { continue }
    visited[row][col] = true
    // If this node is equal 0 do nothing
    if (matrix[row][col] === 0 ) {continue}
    // Count this node as river
    countRiverSize++
    // Get unvisited neighborgs and add them to nodes to explore
    const unvisitedNeighborgs = getUnvisitedNeighborgs(row, col, matrix, visited)

    for (const neighborg of unvisitedNeighborgs) {
      nodesToExplore.push(neighborg)
    }
  }
  if ( countRiverSize > 0 ) {sizes.push( countRiverSize )}
}

function getUnvisitedNeighborgs(row, col, matrix, visited ) {
  let unvisitedNeighborgs = []
  // bottom
  if ( row > 0 && !visited[row - 1][col] ) { unvisitedNeighborgs.push([ row - 1, col ])}
  // top
  if ( row < matrix.length - 1 && !visited[row + 1][col] ) { unvisitedNeighborgs.push([row + 1, col])}
  // left
  if ( col > 0 && !visited[row][col - 1] ) { unvisitedNeighborgs.push([row, col - 1])}
  // right
  if ( col < matrix[0].length - 1 && !visited[row][col + 1] ) { unvisitedNeighborgs.push([ row, col + 1 ])}

  return unvisitedNeighborgs
}

