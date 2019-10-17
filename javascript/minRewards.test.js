const { minRewards } = require('./minRewards')

let test1 = [ 3, 2, 1, 4, 5 ]
let test2 = [ 1, 2, 3, 4 ]
let test3 = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9]

test('Test #1',() => {
  expect(minRewards(test2)).toStrictEqual([0])
})

test('Test #2',() => {
  expect(minRewards(test1)).toStrictEqual([2])
})

test.only('Test #3',() => {
  expect(minRewards(test3)).toStrictEqual(15)
  
})