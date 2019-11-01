
def bubbleSort(array):
  isSorted = False
  counter = 0
  while not isSorted:
    isSorted = True
    for i in range(len(array) - 1 - counter ):
      if array[i] > array[i + 1]:
        swap(array, i, i + 1)
        isSorted = False
  return array

def swap(array, i, j):
  tmp = array[i]
  array[i] = array[j]
  array[j] = tmp
