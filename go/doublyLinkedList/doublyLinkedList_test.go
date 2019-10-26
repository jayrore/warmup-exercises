package doublyLinkedList

import "testing"

func expectHead(t *testing.T, head *node, n *node){
  if head != n {
    t.Errorf("Head is incorrect, got: %s, want: %s.",head.value, n.value)
  }
}

func expectTail(t *testing.T, head *node, n *node){
  if head != n {
    t.Errorf("Tail is incorrect, got: %s, want: %s.",head.value, n.value)
  }
}

func TestCase1(t *testing.T) {
  dll := NewDoublyLinkedList()
  node1 := NewNode("node1")
  dll.setHead(node1)
  node2 := NewNode("node2")
  dll.setTail(node2)

  if dll.head != node1 {
    t.Errorf("Head is incorrect, got: %s, want: %s.",dll.head.value, node1.value)
  }

  if dll.tail != node2 {
    t.Errorf("Tail is incorrect, got: %s, want: %s.",dll.tail.value, node2.value)
  }
}

func TestCase2(t *testing.T) {
  dll   := NewDoublyLinkedList()
  node1 := NewNode("node1")
  dll.setHead(node1)
  expectHead(t, dll.head, node1)
  expectTail(t, dll.tail, node1)
  node2 := NewNode("node2")
  dll.setHead(node2)
  expectHead(t, dll.head, node2)
  expectTail(t, dll.tail, node1)

  node3 := NewNode("node3")
  dll.setHead(node3)
  expectHead(t, dll.head, node3)
  expectTail(t, dll.tail, node1)
}

func TestCase3(t *testing.T) {
  dll   := NewDoublyLinkedList()
  node1 := NewNode("node1")
  dll.setTail(node1)
  node2 := NewNode("node2")
  dll.setTail(node2)
  node3 := NewNode("node3")
  dll.setTail(node3)
  node4 := NewNode("node4")
  dll.setTail(node4)

  dll.removeNodesWithValue("node1")
  expectHead(t, dll.head, node2)
  expectTail(t, dll.tail, node4)
  node5 := NewNode("node5")
  dll.insertAtPosition(1, node5)
  expectHead(t, dll.head, node5)
}