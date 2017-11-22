// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My solution
function vowels(str) {
  return str
    .replace(/[^\w]/g, '')
    .replace(/[^aeiou]/gi, '')
    .length
}

// Without regular expressions
function vowelsTwo(str) {
  let count = 0
  for (let letter of str.toLowerCase().trim()) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      count++
    }
  }
  return count
}

function vowelsThree(str) {
  let count = 0
  let checker = ['a', 'e', 'i', 'o', 'u']
  for (let char of str.toLowerCase().trim()) {
    if (checker.includes(char)) {
      count++
    }
  }
  return count
}

// Another regular expression method
function vowelsFour(str) {
  return str.match(/[aeiou]/gi)
    ? str.match(/[aeiou]/gi).length
    : 0
}

module.exports = {
  vowels,
  vowelsTwo,
  vowelsThree,
  vowelsFour
}
