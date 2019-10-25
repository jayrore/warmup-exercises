
class DoublyLinkedList {

  constructor() {
    this.tail = null
    this.head = null
  }

  setHead(node) { // y // z
    if (this.head == null) {
      //    h t
      //     x
      this.head = node
      this.tail = node
    } else {
      // h |    t
      //     x
      // y |    x
      // z | y | x
      this.insertBefore(this.head, node)
    }
  }

  setTail(node) {
    //        h t     |
    // null <- x -> null
    //         h      |     t         |
    // null <- y -> x | y <- x -> null
    if (this.tail === null) {
      this.setHead(node)
    } else {
      this.insertAfter(this.tail, node)
    }

  }

  insertBefore(node, newNode) {
    // null <- x -> null
    // null <- y -> x | y <- x -> null
    // null <- y -> z | y <- z -> x | z <- x -> null
    this.remove(newNode)
    // insert
    newNode.prev = node.prev
    newNode.next = node
    if (node.prev == null) {
      this.head = newNode
    } else {
      node.prev.next = newNode
    }
    node.prev = newNode
  }

  insertAfter(node, newNode) {
    //          h t         |
    // null <p node n> null |
    //           h             |            t            |
    // null <p node n> newNode | node <p newNode n> null |
    //           h             |                         |               t            |
    // null <p node n> newNode | node <p newNode n> x    | newNode <p    x    n> null |
    this.remove(newNode)
    newNode.prev = node
    newNode.next = node.next
    if (node.next === null) {
      this.tail = newNode
    } else {
      node.next.prev = newNode
    }
    node.next = newNode
  }

  remove(node) {
    // null <- y -> z | y <- z -> x | z <- x -> null
    // update head and tail
    if ( node === this.head) { this.head = node.next }
    if ( node === this.tail) { this.tail = node.prev }
    this.removeBindings(node)
  }

  removeBindings(node) {
    if (node.prev !== null) { node.prev.next = node.next}
    if (node.next !== null) { node.next.prev = node.prev}
    node.prev = null
    node.next = null
  }

  insertAtPosition(position, nodeToInsert) {
    if (position == 1) {
      this.setHead(nodeToInsert)
    }
    let node = this.head
    let counterPosition = 1
    while ( node !== null && counterPosition++ !== position ) {
      node = node.next
    }
    if ( node !== null ) {
      this.insertBefore(node, nodeToInsert)
    } else {
      this.setTail(nodeToInsert)
    }
  }

  removeNodesWithValue(value) {
    let node = this.head
    while (node !== null ) {
      let next = node.next
      if (node.value === value) {
        this.remove(node)
      }
      node = next
    }
  }

  containsNodeWithValue( value ) {
    let node = this.head
    while (node !== null ) {
      if (node.value === value) {
        return true
      }
      node = node.next
    }
    return false
  }

}

module.exports = DoublyLinkedList