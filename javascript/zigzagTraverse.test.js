const { zigzagTraverse } = require('./zigzagTraverse')

const test1 = [
  [ 1, 3 ],
  [ 2, 4 ]
]

test('Test #1',()=>{
  expect(zigzagTraverse(test1)).toStrictEqual([1,2,3,4])
})
