def waterArea(array):
  # array [ 0, 1, 0, 1, 0, 2, 0, 3]
  leftMax  = [0] * len(array)
  # = [ 0, 0, 1, 1, 1, 1, 2, 2]
  rightMax = [0] * len(array)
  # = [ 3, 3, 3, 3, 3, 3, 3, 0]
  water = 0
  for idx in reversed(range(0, len(array) - 1 )):
    max = array[idx + 1] if array[idx + 1] > rightMax[idx + 1] else rightMax[idx + 1]
    rightMax[idx] = max

  for idx in range(1, len(array)):
    max = array[idx - 1] if array[idx - 1] > leftMax[idx - 1] else leftMax[idx - 1]
    leftMax[idx] = max
    minHeigth = min(rightMax[idx], leftMax[idx])
    w = minHeigth - array[idx] if array[idx] < minHeigth else 0
    water += w

  return water