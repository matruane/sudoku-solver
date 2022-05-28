const unflatten = require('../unflatten')

describe('unflatten()', () => {
  it('restores a flat array into a 3x3 matrix', () => {
    const flatArr = new Array(9).fill(null).map((value, index) => index + 1)
    const expected = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const actual = unflatten(flatArr)
    expected.forEach((row, index) => {
      expect(row).toEqual(actual[index])
    })
  })
})
