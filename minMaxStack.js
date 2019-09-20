// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = []
    //  [ [min, max], [min, max]  ]
    this.minMax = []
  }

  peek() {
    return this.stack[0]
  }

  pop() {
    this.minMax.shift()
    return this.stack.shift()
  }

  push(number) {
    this.stack.unshift(number)
    updateMinMax(this, number)
  }

  getMin() {
    // Write your code here.
    return this.minMax[0][0]
  }

  getMax() {
    // Write your code here.
    return this.minMax[0][1]
  }
}

function updateMinMax(stack, number) {
  let newMin = number
  let newMax = number
  // If stack is empty number is min and max
  if ( stack.minMax.length ) {
    // newValues are same as last in stack
    newMin = Math.min(stack.minMax[0][0], number)
    newMax = Math.max(stack.minMax[0][1], number)
  }

  // Update min max values
  stack.minMax.unshift([newMin, newMax])
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack