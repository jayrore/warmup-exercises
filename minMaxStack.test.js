const { MinMaxStack } = require('./minMaxStack')

function testMinMaxPeek( peek, min, max, stack) {
  expect(stack.peek()).toStrictEqual(peek)
  expect(stack.getMin()).toStrictEqual(min)
  expect(stack.getMax()).toStrictEqual(max)
}

test('Test #1 - peek',()=>{
  const stack = new MinMaxStack()
  stack.push(5)
  testMinMaxPeek(5, stack )
  stack.push(10)
  testMinMaxPeek(10, stack )
  stack.push(11)
  testMinMaxPeek(11, stack )
})

test('Test #2 - pop', ()=>{
  const stack = new MinMaxStack()
  stack.push(5)
  stack.push(6)
  stack.push(7)
  stack.pop()
  testMinMaxPeek(6, stack )
})

test.only('Test #3 - getMin getMax', ()=>{
  const stack = new MinMaxStack()
  stack.push(5)
  testMinMaxPeek( 5, 5, 5, stack )
  stack.push(6)
  testMinMaxPeek( 6, 5, 6, stack )
  stack.push(2)
  testMinMaxPeek( 2, 2, 6, stack )
  stack.pop(2)
  testMinMaxPeek( 6, 5, 6, stack )
})