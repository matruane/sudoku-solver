const unflatten = (flatArray) => {
  const matrix = new Array()
  for (let i = 0; i < 3; i++) {
    matrix[i] = new Array()
    for (let j = 0; j < 3; j++) {
      matrix[i][j] = flatArray[j + i * 3]
    }
  }
  return matrix
}

module.exports = unflatten
