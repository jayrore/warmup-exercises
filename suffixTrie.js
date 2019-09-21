class SuffixTrie {
  constructor(string) {
    this.root = {}
    this.endSymbol = '*'
    this.populateSuffixTrieFrom(string)
  }

  populateSuffixTrieFrom(string) {
    for ( let i = 0; i < string.length; i++ ) {
      this.insertSubstringAt(i, string)
    }
  }

  insertSubstringAt(i, string) {
    let node = this.root
    for ( let j = i; j < string.length; j++ ) {
      const letter = string[j]
      if (!(letter in node)) {
        node[letter] = {}
      }
      node = node[letter]
    }
    node[this.endSymbol] = true
  }

  contains(string) {
    let str = string.split('')
    let search = str.reduce(( current, char ) =>
      (current && current[char]) ? current[char] : false
      , this.root)

    return (search) ? true : false
  }
}

exports.SuffixTrie = SuffixTrie
