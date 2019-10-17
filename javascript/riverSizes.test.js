const { riverSizes } = require('./riverSizes')

test('test #1',() => {
  const matrix = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]]
  expect(riverSizes(matrix).sort((a, b) => a - b)).toStrictEqual([1,2,3])

})