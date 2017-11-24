const { fib, fib2, fib3 } = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib(4)).toEqual(3);
});

test('calculates correct fib value for 15', () => {
  expect(fib(39)).toEqual(63245986);
});

test('Fib2 function is defined', () => {
  expect(typeof fib2).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib2(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib2(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib2(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib2(4)).toEqual(3);
});

test('calculates correct fib value for 15', () => {
  expect(fib2(39)).toEqual(63245986);
});


test('Fib3 function is defined', () => {
  expect(typeof fib3).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib3(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib3(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib3(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib3(4)).toEqual(3);
});

test('calculates correct fib value for 15', () => {
  expect(fib3(39)).toEqual(63245986);
});
