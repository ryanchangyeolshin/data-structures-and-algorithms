const { reverseInt, reverseIntTwo, reverseIntThree } = require('./index')

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined()
})

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0)
})

test('ReverseInt flips a positive number', () => {
  expect(reverseInt(5)).toEqual(5)
  expect(reverseInt(15)).toEqual(51)
  expect(reverseInt(90)).toEqual(9)
  expect(reverseInt(2359)).toEqual(9532)
})

test('ReverseInt flips a negative number', () => {
  expect(reverseInt(-5)).toEqual(-5)
  expect(reverseInt(-15)).toEqual(-51)
  expect(reverseInt(-90)).toEqual(-9)
  expect(reverseInt(-2359)).toEqual(-9532)
})

test('ReverseIntTwo function exists', () => {
  expect(reverseIntTwo).toBeDefined()
})

test('ReverseIntTwo handles 0 as an input', () => {
  expect(reverseIntTwo(0)).toEqual(0)
})

test('ReverseIntTwo flips a positive number', () => {
  expect(reverseIntTwo(5)).toEqual(5)
  expect(reverseIntTwo(15)).toEqual(51)
  expect(reverseIntTwo(90)).toEqual(9)
  expect(reverseIntTwo(2359)).toEqual(9532)
})

test('ReverseIntTwo flips a negative number', () => {
  expect(reverseIntTwo(-5)).toEqual(-5)
  expect(reverseIntTwo(-15)).toEqual(-51)
  expect(reverseIntTwo(-90)).toEqual(-9)
  expect(reverseIntTwo(-2359)).toEqual(-9532)
})

test('ReverseIntThree function exists', () => {
  expect(reverseIntThree).toBeDefined()
})

test('ReverseIntThree handles 0 as an input', () => {
  expect(reverseIntThree(0)).toEqual(0)
})

test('ReverseIntThree flips a positive number', () => {
  expect(reverseIntThree(5)).toEqual(5)
  expect(reverseIntThree(15)).toEqual(51)
  expect(reverseIntThree(90)).toEqual(9)
  expect(reverseIntThree(2359)).toEqual(9532)
})

test('ReverseIntThree flips a negative number', () => {
  expect(reverseIntThree(-5)).toEqual(-5)
  expect(reverseIntThree(-15)).toEqual(-51)
  expect(reverseIntThree(-90)).toEqual(-9)
  expect(reverseIntThree(-2359)).toEqual(-9532)
})
