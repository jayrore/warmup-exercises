exports.longestPalindromicSubstring = longestPalindromicSubstring

function longestPalindromicSubstring(string) {
  let firstInitChar = 0
  let biggestPalindrome = string[firstInitChar]

  while ( firstInitChar <= string.length ) {
    biggestPalindrome = evalMiddle(firstInitChar, string, biggestPalindrome)
    biggestPalindrome = evalMiddle(firstInitChar, string, biggestPalindrome, true)
    firstInitChar++
  }

  return biggestPalindrome
}

function evalMiddle(initChar, string, biggestPalindrome, compound = false) {
  let oneCharIndexA = initChar
  let oneCharIndexB = (!compound) ? initChar : initChar + 1
  let isPal = (string[oneCharIndexA] === string[oneCharIndexB])

  // lateral move for one char middle
  while (isPal && oneCharIndexA >= 0 && oneCharIndexB <= string.length - 1) {
    let oneCharSubstring = string.substring(oneCharIndexA, oneCharIndexB + 1)
    isPal = isPalindrome(oneCharSubstring)
    if (isPal && oneCharSubstring.length > biggestPalindrome.length) {
      biggestPalindrome = oneCharSubstring
    }
    oneCharIndexA--
    oneCharIndexB++
  }
  return biggestPalindrome
}


function isPalindrome(string) {
  let leftChar = 0
  let rightChar = string.length - 1
  while ( rightChar >= 0 ) {
    if ( string[leftChar] != string[rightChar] ) {
      return false
    }
    leftChar++
    rightChar--
  }
  return true
}