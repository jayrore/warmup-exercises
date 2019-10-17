const { searchInSortedMatrix } = require('./searchInSortedMatrix')

const test1 = [
  [1, 10, 100, 1000],
  [2, 20, 200, 2000],
  [3, 30, 300, 3000],
]


test('Test #1', () => {
  expect(searchInSortedMatrix(test1, 1000)).toStrictEqual([0,3])
})

test('Test #2', () => {
  expect(searchInSortedMatrix(test1, 1)).toStrictEqual([0,0])
})

test('Test #3', () => {
  expect(searchInSortedMatrix(test1, 4)).toStrictEqual([-1,-1])
  expect(searchInSortedMatrix(test1, 40)).toStrictEqual([-1,-1])
  expect(searchInSortedMatrix(test1, 400)).toStrictEqual([-1,-1])
  expect(searchInSortedMatrix(test1, 4000)).toStrictEqual([-1,-1])

})