import unittest
from twoNumberSum import twoNumberSum

class TestProgram(unittest.TestCase):
  def test_case1(self):
    test1 = [5,3,0,-1,4,6]
    output = twoNumberSum(test1, 8)
    self.assertEqual(output ,[3,5])

if __name__ == "__main__":
  unittest.main()