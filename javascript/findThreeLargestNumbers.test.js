const program = require('./findThreeLargestNumbers')

test('#1 test',()=>{
  let test1 = [4,1,2,3]
  expect(program.findThreeLargestNumbers(test1)).toStrictEqual([2,3,4])
})