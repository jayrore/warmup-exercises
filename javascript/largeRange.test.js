const { largestRange } = require('./largestRange')

const test1 = [ 1, 2 ]
const test2 = [8, 4, 2, 10, 3, 6, 7, 9, 1]

test('Test #1',() => {
  expect(largestRange([1])).toStrictEqual([1,1])
  expect(largestRange(test1)).toStrictEqual([1,2])
})

test('Test #2',() => {
  expect(largestRange(test2)).toStrictEqual([6,10])
})