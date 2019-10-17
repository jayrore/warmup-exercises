exports.Node = class Node {
  constructor(name) {
    this.name = name
    this.children = []
  }

  addChild(name) {
    this.children.push(new Node(name))
    return this
  }

  breadthFirstSearch( array = [] ) {
    let queue  = []
    queue.push(this)
    while (queue[0]) {
      array.push(queue[0].name)
      queue[0].children.forEach(child => {
        queue.push(child)
      })
      queue.shift()
    }
    return array
    // Write your code here.
  }
}