const fillSquare = (square) => {
  let newArr = [[], [], []]
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      newArr[i][j] = j + 1 + i * 3
    }
  }
  return newArr
}

module.exports = fillSquare
