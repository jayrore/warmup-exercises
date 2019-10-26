package doublyLinkedList

type doublyLinkedList struct {
  head *node
  tail *node
}

func NewDoublyLinkedList() *doublyLinkedList{
  dll:=doublyLinkedList{}
  return &dll
}

func (dll *doublyLinkedList) setHead(n *node) {
  if dll.head == nil {
    dll.head = n
    dll.tail = n
  } else {
    dll.insertBefore(dll.head, n)
  }
}

func (dll *doublyLinkedList) insertBefore(node *node, nodeToInsert *node) {
  // Link nodeToInsert
  dll.remove(nodeToInsert)
  nodeToInsert.prev = node.prev
  nodeToInsert.next = node
  // Move head and ReLink node
  if node.prev == nil {
    dll.head = nodeToInsert
  } else {
     node.prev.next = nodeToInsert
  }
  node.prev = nodeToInsert
}

func (dll *doublyLinkedList) setTail(n *node) {
  if dll.tail == nil {
    dll.head = n
    dll.tail = n
  } else {
    dll.insertAfert(dll.tail, n)
  }
}

func (dll *doublyLinkedList) insertAfert(node *node, nodeToInsert *node) {
  // Link nodeToInsert
  dll.remove(nodeToInsert)
  nodeToInsert.prev = node
  nodeToInsert.next = node.next
  // Move head and ReLink node
  if node.next == nil {
    dll.tail = nodeToInsert
  } else {
     node.next.prev = nodeToInsert
  }
  node.next = nodeToInsert
}

func (dll *doublyLinkedList) remove(node *node) {
  // detach corners
  if node == dll.head {
    dll.head = node.next
  }
  if node == dll.tail {
    dll.tail = node.prev
  }
  dll.removeBindings(node)
}

func (dll *doublyLinkedList) removeBindings(node *node) {
  if node.prev != nil {
    node.prev.next = node.next
  }
  if node.next != nil {
    node.next.prev = node.prev
  }
  node.prev = nil
  node.next = nil
}

func (dll *doublyLinkedList) removeNodesWithValue(text string) {
  n := dll.head
  for n != nil {
    if n.value == text {
      dll.remove(n)
    }
    n = n.next
  }
}

func (dll *doublyLinkedList) containsNodeWithValue(text string) bool{
  n := dll.head
  for n != nil {
    if n.value == text {
      return true
    }
    n = n.next
  }
  return false
}

func (dll *doublyLinkedList) insertAtPosition(position int, nodeToInsert *node) bool{
  n := dll.head
  if position == 1 {
    dll.setHead(nodeToInsert)
  }
  counter := 1
  for n != nil && counter != position {
    counter += 1
    n = n.next
  }
  dll.insertBefore(n, nodeToInsert)
  return false
}
