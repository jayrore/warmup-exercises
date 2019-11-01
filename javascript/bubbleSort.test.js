const program = require('./bubbleSort')

test('#1 test',() => {
  let test1 = [5,2,1,3,4]
  expect(program.bubbleSort(test1)).toStrictEqual([1,2,3,4,5])
})