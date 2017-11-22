const { vowels, vowelsTwo, vowelsThree, vowelsFour } = require('./index');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowels('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowels('bcdfghjkl')).toEqual(0);
});

test('VowelsTwo is a function', () => {
  expect(typeof vowelsTwo).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowelsTwo('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowelsTwo('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowelsTwo('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowelsTwo('bcdfghjkl')).toEqual(0);
});

test('VowelsThree is a function', () => {
  expect(typeof vowelsThree).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowelsThree('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowelsThree('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowelsThree('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowelsThree('bcdfghjkl')).toEqual(0);
});

test('VowelsFour is a function', () => {
  expect(typeof vowelsFour).toEqual('function');
});

test('returns the number of vowels used', () => {
  expect(vowelsFour('aeiou')).toEqual(5);
});

test('returns the number of vowels used when they are capitalized', () => {
  expect(vowelsFour('AEIOU')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowelsFour('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
});

test('returns the number of vowels used', () => {
  expect(vowelsFour('bcdfghjkl')).toEqual(0);
});
