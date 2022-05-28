const isValidSquare = require('../isValidSquare')

const oneToNine = new Array(9).fill(null).map((value, index) => index + 1)

describe('isValidSquare()', () => {
  it('returns false for an empty square', () => {
    const square = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
    const actual = isValidSquare(square)
    expect(actual).not.toBeUndefined()
    expect(actual).toBeFalsy()
  })
  it('returns false for a square missing one number', () => {
    const square = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, null],
    ]
    const actual = isValidSquare(square)
    expect(actual).not.toBeUndefined()
    expect(actual).toBeFalsy()
  })
  it('returns true for a square containing all numbers in order', () => {
    const square = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const actual = isValidSquare(square)
    expect(actual).toBeTruthy()
  })
  it('returns true for a square containing all numbers in jumbled order', () => {
    const square = [
      [5, 4, 9],
      [2, 1, 8],
      [6, 7, 3],
    ]
    const actual = isValidSquare(square)
    expect(actual).toBeTruthy()
  })
})
