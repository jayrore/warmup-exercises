
function maxPathSum(tree) {
  let { maxSumBranch, runningMaxSumBranch } = maxPathSumHandler(tree)
  return Math.max(maxSumBranch, runningMaxSumBranch)
}
function maxPathSumHandler(tree) {
  if ( tree === null ) {
    return {
      maxSumBranch:        0,
      runningMaxSumBranch: 0
    }
  }
  // left
  let left = maxPathSumHandler(tree.left)
  // right
  let right = maxPathSumHandler(tree.right)
  let maxChildBranchSum = Math.max(left.maxSumBranch, right.maxSumBranch)
  // calculate the max branch sum
  let maxSumBranch = Math.max(maxChildBranchSum + tree.value, tree.value)
  // calculate the running max branch sum
  let maxSumTree = Math.max(maxSumBranch, left.maxSumBranch + tree.value + right.maxSumBranch)
  let runningMaxSumBranch = Math.max(maxSumTree, left.runningMaxSumBranch, right.runningMaxSumBranch)
  return { maxSumBranch , runningMaxSumBranch }
}

exports.maxPathSum = maxPathSum
