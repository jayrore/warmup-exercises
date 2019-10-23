const productSumArray = require('./productSumArray')

const test1 = [1,2,[3,4]]
const test2 = [1,2,[3,4],[1,2,[1,2]]]
const test3 = [1,2,[3,4],[1,2,[1,2]],[]]

test('test #1',()=>{
  expect(productSumArray(test1)).toBe(17)
})

test('test #2',()=>{
  expect(productSumArray(test2)).toBe(17 + 24)
})

test('test #3',()=>{
  expect(productSumArray(test3)).toBe(17 + 24)
})