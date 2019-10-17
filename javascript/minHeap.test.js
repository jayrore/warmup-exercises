const { MaxHeap } = require('./minHeap')

const test1 = new MaxHeap([2, 3, 1])

test('Test #1', ()=>{
  expect(test1.heap[0]).toBe(3)
})