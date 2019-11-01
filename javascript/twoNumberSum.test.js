const program = require('./twoNumberSum')

test('#1 test',()=>{
  let test1 = [5,3,0,-1,4,6]
  expect(program.twoNumberSum(test1, 8)).toStrictEqual([3,5])
})