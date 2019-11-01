import unittest
from bubbleSort import bubbleSort

class TestProgram(unittest.TestCase):
  def test_case1(self):
    test1 = [5,2,1,3,4]
    output = bubbleSort(test1)
    self.assertEqual(output , [1,2,3,4,5])

if __name__ == "__main__":
  unittest.main()