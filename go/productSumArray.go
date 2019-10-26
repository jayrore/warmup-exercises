package main

import (
  "fmt"
)

type SpecialArray []interface{}

func ProductSum(array SpecialArray ) int {
  return ProductSumHandler(array, 1)
}

func ProductSumHandler(array SpecialArray, depth int) int {
  sum := 0
  for _, el := range array {
    if cast, ok := el.(SpecialArray); ok {
      sum += ProductSumHandler(cast, depth + 1)
    } else if cast, ok := el.(int); ok {
      sum += cast
   }
  }
  return sum * depth
}

// func main(){
// 	// 27
//   fmt.Print(ProductSum(SpecialArray{SpecialArray{1, 2}, 3, SpecialArray{4, 5}}))
// }
