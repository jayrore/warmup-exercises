const { powerset } = require('./powerset')

test('test #1', ()=>{
  expect(powerset(['1','2','b'])).toBe(true)
})