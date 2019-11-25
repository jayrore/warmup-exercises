const program = require('./selectionSort')

test('#1 test',()=>{
  const test1 = [4,3,2,1]
  expect(program.selectionSort(test1)).toStrictEqual([1,2,3,4])
})