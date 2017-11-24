// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// My solution
function fib(n) {
  const array = [0, 1]
  for (let i = 2; i <= n; i++) {
    array.push(array[i - 2] + array[i - 1])
  }
  return array[n]
}

// Recursion (Exponential!!!!!!! O(2^n), NOT RECOMMENDED)
function fib2(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

// Memoization
function memoize(fn) {
  // Record of all of the previous results
  const cache = {}
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }
    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

function slowFib(n) {
  if (n < 2) {
    return n
  }
  return fib3(n - 1) + fib3(n - 2)
}

const fib3 = memoize(slowFib)

module.exports = {
  fib,
  fib2,
  fib3
}
