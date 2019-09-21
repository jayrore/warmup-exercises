let { longestPalindromicSubstring } = require('./longestPalindromicSubstring')

test('Test #1', ()=>{
  expect(longestPalindromicSubstring('a')).toBe('a')
  expect(longestPalindromicSubstring('aaa')).toBe('aaa')
  expect(longestPalindromicSubstring('zbz')).toBe('zbz')
  expect(longestPalindromicSubstring('zbxb')).toBe('bxb')
  expect(longestPalindromicSubstring('cbbc')).toBe('cbbc')
  expect(longestPalindromicSubstring('xcbbc')).toBe('cbbc')
})