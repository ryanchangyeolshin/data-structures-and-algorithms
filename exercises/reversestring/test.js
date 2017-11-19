const reverse = require('./index')
const reverseTwo = require('./index')

test('Reverse function exists', () => {
  expect(reverse).toBeDefined()
})

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverse('    abcd')).toEqual('dcba    ')
})

test('Reverse function exists', () => {
  expect(reverseTwo).toBeDefined()
})

test('Reverse reverses a string', () => {
  expect(reverseTwo('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverseTwo('    abcd')).toEqual('dcba    ')
})
