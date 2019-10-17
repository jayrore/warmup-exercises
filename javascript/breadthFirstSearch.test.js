const { Node }  = require('./breadthFirstSearch')
//        A
//      / | \
//     B  C  D
//    /
//   E
const test1 = new Node('A')
test1.addChild('B').addChild('C').addChild('D')
test1.children[0].addChild('E')

test('Test #1',()=>{
  expect(test1.breadthFirstSearch()).toStrictEqual(['A','B','C','D','E'])
})
