package bubbleSort

func BubbleSort(array []int) []int {
	isSorted := false
	counter := 0
	for !isSorted {
		isSorted = true
		for i := 0; i < len(array) - 1 - counter; i++ {
			if array[i] > array[ i+ 1] {
				swap(array, i, i + 1)
				isSorted = false
			}
		}
		counter += 1
	}
	return array
}

func swap(array []int, i int, j int) {
	tmp := array[i]
	array[i] = array[j]
	array[j] = tmp
}