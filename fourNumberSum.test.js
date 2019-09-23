let { fourNumberSum } = require('./fourNumberSum')

let test1 = [7,6,4,1,-1,2]

test.only('Test #1', ()=>{
  // expect(fourNumberSum([7,6,4,1,-1,2],16))
  expect(fourNumberSum(test1, 16)).toEqual(expect.arrayContaining([ [7,6,4,-1] ]))
})

test('Test #2', ()=>{
  let test = [7,6,4,-1]
  expect(fourNumberSum(test, 16)).toEqual(expect.arrayContaining([ [7,6,4,-1] ]))
})
