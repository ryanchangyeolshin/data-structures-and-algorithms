const { maxChar, maxChar2 } = require('./index')

test('maxChar function exists', () => {
  expect(maxChar).toBeDefined()
})

test('Finds the most frequently used char', () => {
  // expect(maxChar('a')).toEqual('a')
  expect(maxChar('abcdefghijklmnvvvvvvvvv')).toEqual('v')
})

test('Works with numbers in the string', () => {
  expect(maxChar('a1b1c1d1e1f1g1')).toEqual('1')
})

test('maxChar2 function exists', () => {
  expect(maxChar2).toBeDefined()
})

test('Finds the most frequently used char', () => {
  // expect(maxChar('a')).toEqual('a')
  expect(maxChar2('abcdefghijklmnvvvvvvvvv')).toEqual('v')
})

test('Works with numbers in the string', () => {
  expect(maxChar2('a1b1c1d1e1f1g1')).toEqual('1')
})
