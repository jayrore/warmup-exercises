exports.levenshteinDistance = levenshteinDistance

function levenshteinDistance(str1, str2) {
  let E = []

  for (let i = 0; i < str2.length + 1; i++) {
    const row = []
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j)
    }
    row[0] = i
    E.push(row)
  }


  for ( let r = 1 ; r < str2.length + 1; r++ ) {
    for ( let c = 1 ; c < str1.length + 1; c++ ) {
      if (str2[r - 1] === str1[c - 1]) {
        E[r][c] = E[ r - 1][ c - 1]
      } else {
        E[r][c] = 1 + Math.min(E[ r ][ c - 1 ],E[ r - 1 ][ c - 1 ],E[ r - 1 ][ c ])
      }
    }
  }

  return E[ str2.length ][ str1.length ]
}
