const isValidLine = require('../isValidLine')

const oneToNine = new Array(9).fill(null).map((value, index) => index + 1)

describe('isValidLine()', () => {
  it('returns false for a completely empty line', () => {
    const line = new Array(9).fill(null)
    const actual = isValidLine(line)
    expect(actual).not.toBeUndefined()
    expect(actual).toBeFalsy()
  })
  it("returns true for a line containing #'s 1-9 in order", () => {
    const line = oneToNine
    const actual = isValidLine(line)
    expect(actual).toBeTruthy()
  })
})
