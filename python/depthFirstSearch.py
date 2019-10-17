
class Node:
  def __init__(self, name):
    self.name = name
    self.children = []

  def addChild(self, name):
    self.children.append( Node(name) )
    return self
  
  def depthFirstSearch(self, array):
    array.append(self.name)
    for child in self.children:
      child.depthFirstSearch(array)
    return array

test = Node("A")
test.addChild("B").addChild("C")
test.children[0].addChild("1").addChild("2")
print(test.depthFirstSearch([]))
