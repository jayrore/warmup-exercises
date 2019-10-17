let { quickSort } = require('./quickSort')
const test1 = [5,1,2,3,4]

test('Test #1', ()=>{
  expect(quickSort(test1)).toStrictEqual([1,2,3,4,5])
})
