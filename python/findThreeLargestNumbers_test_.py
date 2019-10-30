import unittest
from findThreeLargestNumbers import findThreeLargestNumbers

class TestProgram(unittest.TestCase):
  def test_case1(self):
    test1 = [4,1,2,3]
    self.assertEqual(findThreeLargestNumbers(test1) ,[2,3,4])

if __name__ == "__main__":
  unittest.main()