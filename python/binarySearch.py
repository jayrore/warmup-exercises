
from math import floor

def binarySearch(array, target):
  return binarySearchHandle(array, target, 0, len(array) - 1 )

def binarySearchHandle(array, target, left, right):
  if left > right:
    return -1
  middle = floor((left + right) / 2)
  if array[middle] == target:
    return middle

  if target > array[middle]:
    return binarySearchHandle(array, target, middle + 1, right)
  else:
    return binarySearchHandle(array, target, left, middle - 1)
