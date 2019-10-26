package main

import (
  "fmt"
  "math"
)

type bstNode struct {
  value int
  left *bstNode
  right *bstNode
}

func (tree *bstNode) FindClosestValueInBST(target int) int {
  return tree.findClosestValueInBST(target, math.MaxInt32)
}

func (tree *bstNode) findClosestValueInBST(target int, closest int) int {
  currentNode := tree
  for currentNode != nil {
    if math.Abs(float64(target) - float64(closest)) > math.Abs(float64(target) - float64(currentNode.value)){
     closest = currentNode.value
    }
    if target < currentNode.value {
      currentNode = currentNode.left
    } else {
      currentNode = currentNode.right
    }
  }
  return closest
}

func New(value int) *bstNode{
  e := &bstNode{ value: value }
  return e
}

func (tree *bstNode) Insert(value int){
  if value < tree.value {
    if tree.left == nil{
       tree.left = &bstNode{value: value}
    } else {
       tree.left.Insert(value)
    }
  } else {
    if tree.right == nil{
      tree.right = &bstNode{value: value}
    } else {
      tree.right.Insert(value)
    }
  }
}

// func main(){
//   bst := New(10)
//   bst.Insert(15)
//   bst.Insert(8)
//   // fmt.Print(bst.value)
//   fmt.Print(bst.FindClosestValueInBST(13))
// }
