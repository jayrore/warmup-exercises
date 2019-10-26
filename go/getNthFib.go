package main

import (
 "fmt"
)

// func main(){
//   fmt.Println(GetNthFib(5))
// }

func GetNthFib( n int ) int{
  lastTwo := []int{0,1}
  counter :=  3
  for counter <= n {
    nextnum := lastTwo[0] + lastTwo[1]
    lastTwo = []int{lastTwo[1],nextnum} 
    counter += 1
   }

  if n > 1 {
    return lastTwo[1]
  }
  return  lastTwo[0]
}

