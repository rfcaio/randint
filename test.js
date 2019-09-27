const test = require('ava')

const randint = require('.')

test('should return a number between 0 and 9', t => {
  for (let i = 0; i < 100; i += 1) {
    const number = randint()
    t.truthy(number >= 0 && number <= 9)
  }
})
