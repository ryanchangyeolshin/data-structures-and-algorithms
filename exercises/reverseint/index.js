// --- Directions
// Given an integer, return an integer that is the reverse ordering of numbers.
// --- Examples
// reverseInt(15) === 51
// reverseInt(981) === 189
// reverseInt(500) === 5
// reverseInt(-15) === -51
// reverseInt(-90) === -9

// My solution
function reverseInt(n) {
  return Math.sign(n) * parseInt(n
    .toString()
    .split('')
    .reduce((rev, char) => char + rev), 10)
}

// Not recommended
function reverseIntTwo(n) {
  return Math.sign(n) * parseInt(n
    .toString()
    .split('')
    .reverse()
    .join(''), 10)
}

// Not recommended
function reverseIntThree(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('')

  if (n < 0) return parseInt(reversed, 10) * -1
  return parseInt(reversed, 10)
}

module.exports = {
  reverseInt,
  reverseIntTwo,
  reverseIntThree
}
