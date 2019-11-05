const program = require('./insertionSort')

test('#1 test',()=>{
  let test1 = [4,3,2,1]
  expect(program.insertionSort(test1)).toStrictEqual([1,2,3,4])
})