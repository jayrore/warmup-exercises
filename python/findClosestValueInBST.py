
def findClosestValueInBST( tree, target ):
   return findClosestValueInBSTHelper(tree, target, float("inf"))

def findClosestValueInBSTHelper( tree, target, closest):
  currentNode = tree
  while currentNode is not None:
    if abs(target - closest) > abs(target - currentNode.value):
      closest = currentNode.value
    if target < currentNode.value:
      currentNode = currentNode.left
    elif target > currentNode.value:
      currentNode = currentNode.right
    else:
      break
 
  return closest


# Binary Search Tree
class BST:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

  def insert(self, value):
    if value < self.value:
      if self.left is None:
        self.left = BST(value)
      else:
        self.left.insert(value)
    else:
      if self.right is None:
        self.right = BST(value)
      else:
        self.right.insert(value)
    return self  

test = BST(10).insert(17).insert(13)
print(findClosestValueInBST(test, 14))


