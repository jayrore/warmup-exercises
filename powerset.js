module.exports.powerset = powerset

function powerset(array) {
  let powerset = []
  for (const i in array) {
    for (const j in powerset) {
      powerset.push( powerset[j].concat(array[i]) )
    }
    powerset.push([array[i]])
  }
  powerset.push([])
  return powerset
}