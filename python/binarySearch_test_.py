import unittest
from binarySearch import binarySearch

class TestProgram(unittest.TestCase):
  def test_case1(self):
    test1 = [0,1,2,3,4,5,6,7,8]
    self.assertEqual(binarySearch(test1, 2) ,2)

  def test_case2(self):
    test1 = [0,1,2,3,4,5,6,7,8]
    self.assertEqual(binarySearch(test1, 6) ,6)

if __name__ == "__main__":
  unittest.main()