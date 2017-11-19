// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not. palindrome are strings that form the same word if it
// is reversed. *Do* includes spaces and punctuation in determining the string
// is a palindrome.

// My solution
function palindrome(str) {
  return str
    .split('')
    .reduce((reversed, character) => character + reversed, '') === str
}

// Not recommended
function palindromeTwo(str) {
  const reversed =  str.split('').reverse().join('')
  return reversed === str
}

// Not recommended. Not an ideal solution, but talk about it with the interviewer.
// every function checks to see if every single value provides a true or false
// according to the function
function palindromeThree(str) {
  return str
    .split('')
    .every((char, i) => {
      return char === str[str.length - i - 1]
    })
}

module.exports = {
  palindrome,
  palindromeTwo,
  palindromeThree
}
