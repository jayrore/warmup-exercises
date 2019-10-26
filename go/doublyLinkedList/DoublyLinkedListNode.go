package doublyLinkedList

type node struct {
  value string
  prev, next *node
}

func NewNode(value string) *node{
  n:=node{value: value}
  return &n
}