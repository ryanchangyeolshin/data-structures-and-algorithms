const { reverse, reverseTwo, reverseThree, reverseFour } = require('./index')

test('Reverse function exists', () => {
  expect(reverse).toBeDefined()
})

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba')
})

test('Reverse reverses a string', () => {
  expect(reverse('    abcd')).toEqual('dcba    ')
})

test('ReverseTwo function exists', () => {
  expect(reverseTwo).toBeDefined()
})

test('ReverseTwo reverses a string', () => {
  expect(reverseTwo('abcd')).toEqual('dcba')
})

test('ReverseTwo reverses a string', () => {
  expect(reverseTwo('    abcd')).toEqual('dcba    ')
})

test('ReverseThree function exists', () => {
  expect(reverseThree).toBeDefined()
})

test('ReverseThree reverses a string', () => {
  expect(reverseThree('abcd')).toEqual('dcba')
})

test('ReverseThree reverses a string', () => {
  expect(reverseThree('    abcd')).toEqual('dcba    ')
})

test('ReverseFour function exists', () => {
  expect(reverseFour).toBeDefined()
})

test('ReverseFour reverses a string', () => {
  expect(reverseFour('abcd')).toEqual('dcba')
})

test('ReverseFour reverses a string', () => {
  expect(reverseFour('    abcd')).toEqual('dcba    ')
})
