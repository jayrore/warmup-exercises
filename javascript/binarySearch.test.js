const binarySearch = require('./binarySearch')

test('Test #1', ()=>{
  const test1 = [0,1,21,33,44,45,66,77,88,99]
  expect(binarySearch(test1, 33)).toEqual(3)
})

test('Test #2', ()=>{
  const test1 = [0,1,21,33,44,45,66,77,88,99]
  expect(binarySearch(test1, 77)).toEqual(7)
})