const oneToNine = new Array(9).fill(null).map((value, index) => index + 1)

/* Returns true if a flattened array representing the line is valid */

function isValidLine(flatLineArr) {
  if (hasEmptyCells(flatLineArr)) return false
  return flatLineArr.includes(oneToNine)
}

function hasEmptyCells(arr) {
  let flag = false
  arr.forEach((item) => {
    if (item === undefined || item === null) {
      flag = true
    }
  })
  return flag
}

module.exports = isValidLine
