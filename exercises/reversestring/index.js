// --- Directions
// Given a string, return a new string with the reversed order of characters
// -- Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

// My solution
function reverse(str) {
  let arr = []
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i])
  }
  let newString = arr.join('')
  return newString
}

// Sometimes interviewers don't want you to use the reverse function.
function reverseTwo(str) {
  return str.split('').reverse().join('')
}

// Try to avoid for loops
function reverseThree(str) {
  let reversed = ''
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}

// Better way of solving this problem
function reverseFour(str) {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '')
}

module.exports = {
  reverse,
  reverseTwo,
  reverseThree,
  reverseFour
}
