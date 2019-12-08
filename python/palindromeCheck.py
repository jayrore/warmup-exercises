
def palindromeCheck(string):
  """ Returns Bool if a string is a palindrome by checking 
  the reverse string with the original """

  reversedString = ""
  for i in reversed(range(len(string))):
    reversedString += string[i]
  return reversedString == string
