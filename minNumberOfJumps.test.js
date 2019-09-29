let { minNumberOfJumps } = require('./minNumberOfJumps')

let test1 = [ 3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3 ]

test('Test #1', ()=>{
  expect(minNumberOfJumps(test1)).toBe(4)
})