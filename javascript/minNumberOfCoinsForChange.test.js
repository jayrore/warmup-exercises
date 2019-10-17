const { minNumberOfCoinsForChange } = require('./minNumberOfCoinsForChange')


test('test #1',() => {
  expect(minNumberOfCoinsForChange(6, [1,2,4])).toBe(2)
})

test.only('test #2',() => {
  expect(minNumberOfCoinsForChange(20, [2,5,4])).toBe(4)
})

test('test #3',() => {
  expect(minNumberOfCoinsForChange(10, [1,2])).toBe(5)
})
