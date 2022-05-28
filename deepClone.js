const deepClone = (matrix) => {
  const newArr = []
  matrix.forEach((row) => {
    newArr.push([...row])
  })
  return newArr
}

module.exports = deepClone
