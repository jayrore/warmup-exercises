import unittest
from DoublyLinkedList import DoublyLinkedList
from DoubleLinkedListNode import DoubleLinkedListNode

class TestProgram(unittest.TestCase):

  def test_case1(self):
    list = DoublyLinkedList()
    self.assertEqual(list.head, None)
    self.assertEqual(list.tail, None)

  def test_case2(self):
    list = DoublyLinkedList()
    node1 = DoubleLinkedListNode(1)
    list.setHead(node1)
    self.assertEqual(list.head, node1)
    self.assertEqual(list.tail, node1)

  def test_case3(self):
    list = DoublyLinkedList()
    node1 = DoubleLinkedListNode(1)
    list.setHead(node1)
    node2 = DoubleLinkedListNode(2)
    list.setHead(node2)
    self.assertEqual(list.head, node2)
    self.assertEqual(list.tail, node1)
    node3 = DoubleLinkedListNode(3)
    list.setHead(node3)
    self.assertEqual(list.head, node3)
    self.assertEqual(list.head.next, node2)

  def test_case4(self):
    list = DoublyLinkedList()
    node1 = DoubleLinkedListNode(1)
    list.setHead(node1)
    self.assertEqual(list.head, node1)
    self.assertEqual(list.tail, node1)

  def test_case5(self):
    list = DoublyLinkedList()
    node1 = DoubleLinkedListNode(1)
    node2 = DoubleLinkedListNode(2)
    node3 = DoubleLinkedListNode(3)
    node4 = DoubleLinkedListNode(4)
    list.setTail(node1)
    self.assertEqual(list.head, node1)
    self.assertEqual(list.tail, node1)
    list.setTail(node2)
    self.assertEqual(list.head, node1)
    self.assertEqual(list.tail, node2)
    list.insertBefore(node1, node3)
    self.assertEqual(list.head, node3)
    self.assertEqual(list.tail, node2)
    list.insertAfter(node2, node4)
    self.assertEqual(list.head, node3)
    self.assertEqual(list.tail, node4)

  def test_case6(self):
    list = DoublyLinkedList()
    node1 = DoubleLinkedListNode(1)
    node2 = DoubleLinkedListNode(2)
    node3 = DoubleLinkedListNode(3)
    list.setTail(node1)
    list.insertAfter(node1, node2)
    list.insertAfter(node2, node3)
    list.removeNodesWithValue(1)
    self.assertEqual(list.head, node2)
    self.assertEqual(list.tail, node3)
    self.assertEqual(list.containsNodeWithValue(1), False )
    self.assertEqual(list.containsNodeWithValue(2), True )
    self.assertEqual(list.containsNodeWithValue(3), True )


if __name__ == "__main__":
  unittest.main()
