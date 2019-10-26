package main
import (
  "fmt"
  "sort"
)

// func main(){
//   result := twoNumbersSum([]int{1,2,4,5,3},7)
//   fmt.Println(result)
// }

func twoNumbersSum(array []int, targetSum int) []int{
  sort.Ints(array)
  left, right := 0, len(array)-1
  for left < right {
    currentSum := array[left] + array[right]
    if currentSum == targetSum {
      return []int{array[left], array[right]}
    } else if currentSum < targetSum {
      left += 1
    } else {
      right -= 1
    }
  }
  return []int{}
}
