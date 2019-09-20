const { hasSingleCycle } = require('./hasSingleCycle')

test('test #1',() => {
  expect(hasSingleCycle([2,3,1,-4,-4,2])).toBe(true)
})

test('test #2',() => {
  expect(hasSingleCycle([1, 1, 0, 1, 1])).toBe(false)
})

test('test #3',() => {
  expect(hasSingleCycle([ 2, 2, -1])).toBe(true)
})

test('test #4', ()=> {
  expect(hasSingleCycle([ 1, 1, 1, 1, 2 ])).toBe(false)
})