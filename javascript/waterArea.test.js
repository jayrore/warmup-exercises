const program = require('./waterArea')

test('#1 test',()=>{
  // test1 = [0, 1, 0, 1, 0, 2, 0, 3]
  expect(program.waterArea('')).toBe(true)
})