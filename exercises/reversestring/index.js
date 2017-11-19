// --- Directions
// Given a string, return a new string with the reversed order of characters
// -- Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

// My solution
function reverse(str) {
  let arr = []
  for (let i = str.length; i >= 0; i--) {
    arr.push(str[i])
  }
  let newString = arr.join('')
  return newString
}

function reverseTwo(str) {
  return str.split('').reverse().join('')
}

module.exports = reverse
