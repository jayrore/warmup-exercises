const { heapSort } = require('./heapSort')

test('Test #1', () => {
  let test1 = [2,3,1]
  expect(heapSort(test1)[0]).toBe(1)
  expect(heapSort(test1)).toStrictEqual([1,2,3])
})