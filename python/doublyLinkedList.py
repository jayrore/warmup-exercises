
class DoublyLinkedList:
  def __init__(self):
    self.head = None
    self.tail = None

  def setHead(self, node):
    if self.head == None:
      self.head = node
      self.tail = node
    else:
      self.insertBefore(self.head, node)

  def setTail(self, node):
    if self.tail == None:
      self.setHead(node)
    else:
      self.insertAfter(self.tail, node)

  def insertBefore(self, node, nodeToInsert):
    self.remove(nodeToInsert)
    nodeToInsert.prev = node.prev
    nodeToInsert.next = node
    if node.prev == None:
      self.head = nodeToInsert
    else:
      node.prev.next = nodeToInsert
    node.prev = nodeToInsert

  def insertAfter(self, node, nodeToInsert):
    self.remove(nodeToInsert)
    nodeToInsert.prev = node
    nodeToInsert.next = node.next
    if node.next == None:
      self.tail = nodeToInsert
    else:
      node.next.prev = nodeToInsert
    node.next = nodeToInsert

  def remove(self, node):
    # move corners
    if node == self.head : self.head = node.next 
    if node == self.tail : self.tail = node.prev 
    # remove bindings

  def removeBindings(self, node):
    if node.prev != None: node.prev.next = node.next
    if node.next != None: node.next.prev = node.prev
    node.prev = None
    node.next = None

  def removeNodesWithValue(self, value):
    node = self.head
    while node != None:
      if node.value == value:
        self.remove(node)
      node = node.next

  def containsNodeWithValue(self, value):
    node = self.head
    while node != None:
      if node.value == value:
        return True
      node = node.next
    return False
