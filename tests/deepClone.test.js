const deepClone = require('../deepClone')

describe('deepClone()', () => {
  it('returns a new array', () => {
    const square = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const actual = deepClone(square)
    expect(actual).not.toBeUndefined()
    expect(actual).not.toBe(square)
  })
  it("clones the sub-arrays, doesn't return references to original sub-arrays", () => {
    const square = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const actual = deepClone(square)
    expect(actual).not.toBeUndefined()
    expect(actual[0]).not.toBe(square[0])
  })
})
