const { capitalize, capitalize2, capitalize3 } = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});

test('Capitalize2 is a function', () => {
  expect(typeof capitalize2).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize2('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize2('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});

test('Capitalize3 is a function', () => {
  expect(typeof capitalize3).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize3('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize3('i love breakfast at bill miller bbq')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});
