let { getPermutations } = require('./getPermutations')

let test1 = [ 1 ]
let test2 = [ 1, 2 ]
let test3 = [ 1, 2, 3 ]

test('Test #1', ()=>{
  expect(getPermutations(test1)).toStrictEqual([[1]])
})

test('Test #2', ()=>{
  expect(getPermutations(test2)).toStrictEqual([ [1,2] , [2,1] ])
})

test.only('Test #3', ()=>{
  expect(getPermutations(test3)).toEqual(expect.arrayContaining([ [1, 2, 3] ]))
  expect(getPermutations(test3)).toEqual(expect.arrayContaining([ [1, 3, 2] ]))
  expect(getPermutations(test3)).toEqual(expect.arrayContaining([ [2, 1, 3] ]))
  expect(getPermutations(test3)).toEqual(expect.arrayContaining([ [2, 3, 1] ]))
  expect(getPermutations(test3)).toEqual(expect.arrayContaining([ [3, 1, 2] ]))
  expect(getPermutations(test3)).toEqual(expect.arrayContaining([ [3, 2, 1] ]))
})
