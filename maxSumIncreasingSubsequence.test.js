const { maxSumIncreasingSubsequence } = require('./maxSumIncreasingSubsequence')

let test1 = [ 8, 12, 2, 3, 15, 5, 7 ]

test('Test #1', ()=>{
  expect(maxSumIncreasingSubsequence(test1)).toStrictEqual([35, [ 8, 12, 15 ]])
})