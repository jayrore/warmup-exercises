
def productSumArray( array ):
  return productSumArrayHandle( array, 1 )

def productSumArrayHandle( array, depth ):
  sum = 0
  for number in array:
    if isinstance(number, list):
      sum += productSumArrayHandle( number, depth + 1 )
    else:
      sum += number

  return depth * sum

print(productSumArray([1,2,[3,4]]))
print(productSumArray([1,2,[3,4],[1,2,[1,2]]]))
print(productSumArray([1,2,[3,4],[1,2,[1,2]],[]]))
