const Node = require('./DoubleLinkedListNode')
const DoublyLinkedList = require('./DoublyLinkedList')

test('#1 test', ()=>{
  const list = new DoublyLinkedList()
  const node = new Node('1')
  list.setHead(node)
  expect(list.head).toStrictEqual(node)
  expect(list.tail).toStrictEqual(node)
})

test('#2 test', ()=>{
  const list = new DoublyLinkedList()
  const node1 = new Node('1')
  list.setHead(node1)
  const node2 = new Node('2')
  list.setHead(node2)
  expect(list.head).toStrictEqual(node2)
  expect(list.tail).toStrictEqual(node1)
})

test('#3 test', ()=>{
  const list = new DoublyLinkedList()
  const node1 = new Node('1')
  list.setHead(node1)
  const node2 = new Node('2')
  list.setHead(node2)
  const node3 = new Node('2')
  list.setHead(node3)

  expect(list.head).toStrictEqual(node3)
  expect(node3.next).toStrictEqual(node2)
  expect(list.tail).toStrictEqual(node1)
})

test('#4 test', ()=>{
  const list = new DoublyLinkedList()
  const node1 = new Node('1')
  list.setHead(node1)
  const node2 = new Node('2')
  list.setHead(node2)
  const node3 = new Node('3')
  list.insertBefore(node1, node3)

  expect(list.head).toStrictEqual(node2)
  expect(node1.prev).toStrictEqual(node3)
  expect(node2.next).toStrictEqual(node3)
  expect(list.tail).toStrictEqual(node1)

  list.insertBefore(node2, node1)
  expect(list.head).toStrictEqual(node1)
  expect(list.tail).toStrictEqual(node3)
  expect(list.head.next).toStrictEqual(node2)
  expect(list.tail.prev).toStrictEqual(node2)
})

test('#5 test', ()=>{
  const list = new DoublyLinkedList()
  const node1 = new Node('1')
  list.setTail(node1)
  expect(list.head).toStrictEqual(node1)
  expect(list.tail).toStrictEqual(node1)
  const node2 = new Node('2')
  list.setTail(node2)
  expect(list.head).toStrictEqual(node1)
  expect(list.tail).toStrictEqual(node2)

  const node3 = new Node('3')
  list.insertAfter(node1, node3)
  expect(list.head).toStrictEqual(node1)
  expect(list.head.next).toStrictEqual(node3)
  expect(list.tail.prev).toStrictEqual(node3)
  expect(list.tail).toStrictEqual(node2)
})

test('#6 test', ()=>{
  const list  = new DoublyLinkedList()
  const node1 = new Node('1')
  const node2 = new Node('2')
  const node3 = new Node('3')
  const node4 = new Node('4')
  list.setHead(node1)
  list.insertAfter(node1, node2)
  list.insertAfter(node2, node3)
  list.insertAtPosition(1,node4)
  expect(list.head).toStrictEqual(node4)
  expect(list.tail).toStrictEqual(node3)

  const node5 = new Node('5')
  list.insertAtPosition(2,node5)
  expect(list.head).toStrictEqual(node4)
  expect(list.head.next).toStrictEqual(node5)
  expect(list.tail).toStrictEqual(node3)
})

test('#7 test', ()=>{
  const list  = new DoublyLinkedList()
  const node1 = new Node('1')
  const node2 = new Node('2')
  const node3 = new Node('3')
  list.setHead(node1)
  list.insertAfter(node1, node2)
  list.insertAfter(node2, node3)
  expect(list.containsNodeWithValue('1')).toBe(true)
  expect(list.containsNodeWithValue('3')).toBe(true)
  expect(list.containsNodeWithValue('4')).toBe(false)

  list.removeNodesWithValue('3')
  expect(list.containsNodeWithValue('3')).toBe(false)
  expect(list.head).toStrictEqual(node1)
  expect(list.tail).toStrictEqual(node2)
})
