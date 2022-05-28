const unflatten = require('./unflatten')

const oneToNine = new Array(9).fill(null).map((value, index) => index + 1)

const fillSquare = (square) => {
  const flatArr = deepCopy(square).flat()
  const existingNums = square.flat().filter(Number)
  const remainingNums = oneToNine
    .filter((num) => !existingNums.includes(num))
    .reverse()
  const filledFlat = flatArr.map((num) => (num ? num : remainingNums.pop()))

  return unflatten(filledFlat)
}

const deepCopy = (matrix) => {
  const newArr = []
  matrix.forEach((row) => {
    newArr.push([...row])
  })
  return newArr
}

module.exports = fillSquare
