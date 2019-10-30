package binarySearch

func BinarySearch( array []int, target int ) int {
	return binarySearchHandle(array, target, 0, len(array))
}

func binarySearchHandle(array []int , target int, left int, right int) int {
	if left > right{
		return -1
	}
	middle := (left + right) / 2
	if array[middle] == target {
		return middle
	}
	if (array[middle] > target) {
		return binarySearchHandle(array, target, left, middle - 1)
	} else {
		return binarySearchHandle(array, target, middle + 1, right)
	}
}