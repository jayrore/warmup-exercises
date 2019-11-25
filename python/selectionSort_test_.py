import unittest
from selectionSort import selectionSort

class TestProgram(unittest.TestCase):
  def test_case1(self):
    test1=[4,3,2,1,0]
    output=selectionSort(test1)
    expected=[0,1,2,3,4]
    self.assertEqual(output ,expected)

if __name__ == "__main__":
  unittest.main()

tyro,tofu,averment,fargo,fuze,maximal