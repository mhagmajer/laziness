/* @flow */

const Laziness = require('./laziness');

test('it works', () => {
  expect(Array.from(new Laziness([1, 2, 3]))).toEqual([1, 2, 3]);
});
