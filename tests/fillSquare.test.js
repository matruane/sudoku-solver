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
    const actual = fillSquare(square)
    expect(actual.flat()).toEqual(expect.arrayContaining(oneToNine))
  })
  it('can fill a 3x3 square already containing a one in the middle', () => {
    const square = [
      [null, null, null],
      [null, 1, null],
      [null, null, null],
    ]
    const actual = fillSquare(square)
    expect(actual[1][1]).toBe(1)
    expect(actual.flat()).toEqual(expect.arrayContaining(oneToNine))
  })
})
