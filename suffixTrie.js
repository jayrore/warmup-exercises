class SuffixTrie {
  constructor(string) {
    this.root = {}
    this.endSymbol = '*'
    this.populateSuffixTrieFrom(string)
  }

  populateSuffixTrieFrom(string) {
    this.root = { [string[string.length - 1 ]]: { '*': true } }
    for ( let i = string.length - 2; i >= 0; i-- ) {
      if (!this.root[string[i]]) {
        this.root[string[i]] = {}
      }
      let tree = Object.assign({}, this.root[string[i + 1]])
      this.root[string[i]][string[i + 1]] = tree
    }
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
