const fillSquare = require('../fillSquare')

const oneToNine = new Array(9).fill(null).map((value, index) => index + 1)

describe('fillSquare()', () => {
  it('returns a new array', () => {
    const square = new Array(3).map((row) => new Array(3).fill(null))
    const actual = fillSquare(square)
    expect(actual).not.toBeUndefined()
    expect(actual).not.toBe(square)
  })
  it('can fill an empty 3x3 square with numbers 1-9', () => {
    const square = new Array(3).map((row) => new Array(3).fill(null))
    const expected = oneToNine
    const actual = fillSquare(square)
    expect(actual.flat()).toEqual(expect.arrayContaining(expected))
  })
})