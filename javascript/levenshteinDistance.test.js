const { levenshteinDistance } = require('./levenshteinDistance')

test('test #1',() => {
  expect(levenshteinDistance('abc', 'yabd')).toBe(1)
})