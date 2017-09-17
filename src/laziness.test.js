/* @flow */

const Laziness = require('./laziness');

test('it works as iterable', () => {
  expect(Array.from(new Laziness([1, 2, 3]))).toEqual([1, 2, 3]);
});

test('fib', () => {
  function* fib() {
    yield 1;
    yield 1;
    const [fib1, fib2] = Laziness.from(fib()).tee();
    yield* fib1.map2((x, y) => x + y, fib2.tail());
  }

  expect(Array.from(Laziness.from(fib()).slice(0, 9))).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
