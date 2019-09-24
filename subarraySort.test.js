const { subarraySort } = require('./subarraySort')

test('Test #1', () => {
  const test1 = [ 3, 3, 7, 10, 11, 7 ]
  expect(subarraySort(test1)).toStrictEqual([ 2, 5 ])
})

test('Test #2', ()=>{
  const test2 = [ 4, 3, 7, 10, 11, 7 ]
  expect(subarraySort(test2)).toStrictEqual([ 0, 5 ])
})

test('Test #3', ()=>{
  const test2 = [ 3, 3, 7, 10, 11, 7, 12, 13, 14 ]
  expect(subarraySort(test2)).toStrictEqual([ 2, 5 ])
})
