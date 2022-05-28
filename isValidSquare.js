const isValidSquare = (square) => {
  const flatArr = square.flat()
  for (let i = 0; i < flatArr.length; i++) {
    if (!flatArr[i]) return false
  }
  return true
}

module.exports = isValidSquare
