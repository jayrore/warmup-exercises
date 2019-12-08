import unittest
from palindromeCheck import palindromeCheck

class TestProgram(unittest.TestCase):
  def test_case1(self):
    test1 = "abcba"
    output = palindromeCheck(test1)
    self.assertEqual(output, True)

  def test_case2(self):
    test2 = "abcbax"
    output = palindromeCheck(test2)
    self.assertEqual(output, False)

if __name__ == "__main__":
  unittest.main()