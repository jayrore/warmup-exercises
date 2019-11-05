import unittest
from insertionSort import insertionSort

class TestProgram(unittest.TestCase):
  def test_case1(self):
    test1=[4,3,2,1]
    output = insertionSort(test1)
    self.assertEqual(output ,[1,2,3,4])

if __name__ == "__main__":
  unittest.main()