const { SuffixTrie } = require('./suffixTrie')

// Polpulate
let test1 = new SuffixTrie('a')
let test2 = new SuffixTrie('ba')
let test3 = new SuffixTrie('cba')
let test4 = new SuffixTrie('bcba')
let test7 = new SuffixTrie('invisible')

test('Test #1', () => {
  expect(test1.root).toStrictEqual({
    a: { '*': true}
  })
})

test('Test #2', () => {
  expect(test2.root).toStrictEqual({
    a: { '*': true},
    b: { a: { '*': true} }
  })
})

test('Test #3', () => {
  expect(test3.root).toStrictEqual({
    a: { '*': true},
    b: { a: { '*': true} },
    c: { b: { a: { '*': true} } }
  })
})

test('Test #4', () => {
  expect(test4.root).toStrictEqual({
    a: { '*': true},
    b: {
      a: { '*': true},
      c: { b: { a: { '*': true} } }
    },
    c: { b: { a: { '*': true} } }
  })
})

test('Test #5', () => {
  expect(test2.contains('ba')).toBe(true)
})

test('Test #6', () => {
  expect(test4.contains('cb')).toBe(true)
  expect(test4.contains('cd')).toBe(false)
})

test('Test #7', () => {
  expect(test7.root).toStrictEqual({
    "e": {"*": true},
    "l": {"e": {"*": true}},
    "b": {"l": {"e": {"*": true}}},
    "i": {
      "b": {"l": {"e": {"*": true}}},
      "s": {"i": {"b": {"l": {"e": {"*": true}}}}},
      "n": {"v": {"i": {"s": {"i": {"b": {"l": {"e": {"*": true}}}}}}}},
    },
    "s": {"i": {"b": {"l": {"e": {"*": true}}}}},
    "v": {"i": {"s": {"i": {"b": {"l": {"e": {"*": true}}}}}}},
    "n": {"v": {"i": {"s": {"i": {"b": {"l": {"e": {"*": true}}}}}}}},
  })
})
