// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My solution
function hashTable(string) {
  return string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .reduce((acc, value) => {
      return !acc[value]
        ? Object.assign(acc, { [value]: 1 })
        : Object.assign(acc, { [value]: acc[value] + 1 })
    }, {})
}

function anagrams(stringA, stringB) {
  return stringA.trim().length === stringB.trim().length
    ? Object.keys(hashTable(stringA)).length === Object.keys(hashTable(stringB)).length
    : false
}

// Different solution
// Helper function
function buildCharMap(str) {
  const charMap = {}

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

function anagrams2(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length === Object.keys(bCharMap).length) {
    for (let char in aCharMap) {
      if (aCharMap[char] !== bCharMap[char]) {
        return false
      }
    }
    return true
  }
  return false
}

// Final solution
// Helper function
function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

function anagrams3(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

module.exports = {
  anagrams,
  anagrams2,
  anagrams3
}
