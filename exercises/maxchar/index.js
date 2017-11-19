// --- Directions
// Given a string, return the character that is most commonly used in the string.
// --- Examples
// maxChar('abcccccccccd') === 'c'
// maxChar('apple 1231111) === '1'

// My solution
function maxChar(str) {
  let max = 0
  let maxCharacter = ''
  const hashTable = str
    .split('')
    .reduce((acc, value) => {
      return !acc[value]
        ? Object.assign(acc, { [value]: 1 })
        : Object.assign(acc, { [value]: acc[value] + 1 })
    }, {})

  for (let char in hashTable) {
    if (hashTable[char] > max) {
      max = hashTable[char]
      maxCharacter = char
    }
  }
  return maxCharacter
}

// Not recommended
function maxChar2(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    }
    else {
      charMap[char] = 1
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

module.exports = {
  maxChar,
  maxChar2
}
