const randint = require('.')

describe('randint', () => {
  test('should return a number between 0 and 9 by default', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0.996716084261811)
    expect(randint()).toEqual(9)
  })
})
