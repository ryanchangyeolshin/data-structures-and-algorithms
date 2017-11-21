// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// My solution
function buildLevel(level, maxSteps) {
  let str = ''
  for (let i = 1; i <= maxSteps; i++) {
    i <= level
      ? str += '#'
      : str += ' '
  }
  return str
}

function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log(buildLevel(i, n))
  }
}

// Different solution (Recommended)
function steps2(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''
    for (let column = 0; column < n; column++) {
      column <= row
        ? stair += '#'
        : stair += ' '
    }
    console.log(stair)
  }
}

// Different solution (recursion)
function steps3(n, row = 0, stair = '') {
  if (n === row) {
    return
  }
  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }
  if (stair.length <= row) {
    stair += '#'
  }
  else {
    stair += ' '
  }
  steps(n, row, stair)
}

module.exports = {
  steps,
  steps2,
  steps3
}
