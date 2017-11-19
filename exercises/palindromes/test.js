const { palindrome, palindromeTwo, palindromeThree } = require('./index')

test('palindrome function is defined', () => {
  expect(palindrome).toBeDefined()
})

test('"aba" is a palindrome', () => {
  expect(palindrome('aba')).toBeTruthy()
})

test('"  aba" is not a palindrome', () => {
  expect(palindrome('  aba')).toBeFalsy()
})

test('"aba  " is not a palindrome', () => {
  expect(palindrome('aba  ')).toBeFalsy()
})

test('"greetings" is not a palindrome', () => {
  expect(palindrome('greetings')).toBeFalsy()
})

test('"10000000000001" is a palindrome', () => {
  expect(palindrome('10000000000001')).toBeTruthy()
})

test('"Fish hsif" is not a palindrome', () => {
  expect(palindrome('Fish hsif')).toBeFalsy()
})

test('"pennep" is a palindrome', () => {
  expect(palindrome('pennep')).toBeTruthy()
})

test('palindrome function is defined', () => {
  expect(palindromeTwo).toBeDefined()
})

test('"aba" is a palindrome', () => {
  expect(palindromeTwo('aba')).toBeTruthy()
})

test('"  aba" is not a palindrome', () => {
  expect(palindromeTwo('  aba')).toBeFalsy()
})

test('"aba  " is not a palindrome', () => {
  expect(palindromeTwo('aba  ')).toBeFalsy()
})

test('"greetings" is not a palindrome', () => {
  expect(palindromeTwo('greetings')).toBeFalsy()
})

test('"10000000000001" is a palindrome', () => {
  expect(palindromeTwo('10000000000001')).toBeTruthy()
})

test('"Fish hsif" is not a palindrome', () => {
  expect(palindromeTwo('Fish hsif')).toBeFalsy()
})

test('"pennep" is a palindrome', () => {
  expect(palindromeTwo('pennep')).toBeTruthy()
})

test('palindrome function is defined', () => {
  expect(palindromeThree).toBeDefined()
})

test('"aba" is a palindrome', () => {
  expect(palindromeThree('aba')).toBeTruthy()
})

test('"  aba" is not a palindrome', () => {
  expect(palindromeThree('  aba')).toBeFalsy()
})

test('"aba  " is not a palindrome', () => {
  expect(palindromeThree('aba  ')).toBeFalsy()
})

test('"greetings" is not a palindrome', () => {
  expect(palindromeThree('greetings')).toBeFalsy()
})

test('"10000000000001" is a palindrome', () => {
  expect(palindromeThree('10000000000001')).toBeTruthy()
})

test('"Fish hsif" is not a palindrome', () => {
  expect(palindromeThree('Fish hsif')).toBeFalsy()
})

test('"pennep" is a palindrome', () => {
  expect(palindromeThree('pennep')).toBeTruthy()
})
