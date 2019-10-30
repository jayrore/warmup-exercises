package findThreeLargestNumbers

import (
	"math"
)

func FindThreeLargestNumbers(array []int) []int {
	largestNumbers := [] int { math.MinInt32, math.MinInt32, math.MinInt32}
	for _, num := range array {
		updateThreeLargest(largestNumbers, num)
	}
	return largestNumbers
}

func updateThreeLargest(array []int, num int ) {
  if array[2] < num {
		shiftAndUpdate(array, num, 2)
	} else if array[1] < num {
		shiftAndUpdate(array, num, 1)
	}else if array[0] < num {
		shiftAndUpdate(array, num, 0)
	}
}

func shiftAndUpdate(array []int, num int, idx int) {
	for i := 0; i <= idx; i++ {
		if i == idx {
			array[i] = num
		} else {
			array[i] = array[i + 1]
		}
	}
}