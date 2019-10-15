
def twoNumbersSum(array, targetSum):
	array.sort()
	#print(array)
	left = 0
	right = len(array) - 1
	while left < right:
		currentSum = array[left] + array[right]
		if currentSum == targetSum:
			return [array[left], array[right]]
		elif currentSum < targetSum:
    			left += 1
		elif currentSum > targetSum:
			right -= 1
	return []

print(twoNumbersSum([1,2,5,4],7))
