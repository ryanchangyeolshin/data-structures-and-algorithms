// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// My solution
function pyramid(n) {
  const middle = Math.floor((n * 2 - 1) / 2)
  for (let row = 0; row < n; row++) {
    let level = ''
    for (let column = 0; column < n * 2 - 1; column++) {
      if (middle - row <= column && middle + row >= column) {
        level += '#'
      }
      else {
        level += ' '
      }
    }
    console.log(level)
  }
}

// Recursion
function pyramidTwo(n, row = 0, level = '') {
  if (row === n) {
    return
  }
  if (level.length === (2 * n - 1)) {
    console.log(level)
    return pyramidTwo(n, row + 1)
  }
  const middle = Math.floor((2 * n - 1) / 2)
  middle - row <= level.length && middle + row >= level.length
    ? level += '#'
    : level += ' '
  pyramidTwo(n, row, level)
}

module.exports = {
  pyramid,
  pyramidTwo
}
