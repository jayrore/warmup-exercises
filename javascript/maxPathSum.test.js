const { maxPathSum } = require('./maxPathSum')
const { BinaryTree } = require('./binaryTree')

//            1
//         2     3
//       4  5   6  7

test('Test #1', () => {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7])
  expect(maxPathSum(tree)).toBe(18)
})
