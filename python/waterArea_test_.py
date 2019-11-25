import unittest
from waterArea import waterArea

class TestProgram(unittest.TestCase):
  def test_case1(self):
    test1 = [0, 1, 0, 1, 0, 2, 0, 3]
    expected = 4
    output = waterArea(test1)
    self.assertEqual( output, expected)

if __name__ == "__main__":
  unittest.main()