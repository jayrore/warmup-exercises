
package main

import (
  "fmt"
)

type Node struct {
  Name  string
  Children []*Node
}

func (n *Node) AddChild(name string)*Node{
  child := Node{ Name:name }
  n.Children = append(n.Children, &child)
  return n
}

func (n *Node) DepthFirstSearch(array []string) []string {
  array = append(array, n.Name)
  for _, child := range n.Children {
     array = child.DepthFirstSearch(array)
  }
  return array
}

func NewNode(name string) *Node {
  return &Node{
    Name:     name,
    Children: []*Node{},
  }
}

// func main(){
//   test := NewNode("A")
//   test.AddChild("B").AddChild("C")
//   test.Children[0].AddChild("1").AddChild("2")
//   result := test.DepthFirstSearch([]string{})
//   fmt.Println(result)
// }

