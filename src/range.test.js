/* @flow */

const range = require('./range');

test('it works', () => {
  expect(Array.from(range(0, 10))).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(Array.from(range(1, 11))).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(Array.from(range(0, 30, 5))).toEqual([0, 5, 10, 15, 20, 25]);
  expect(Array.from(range(0, -10, -1))).toEqual([0, -1, -2, -3, -4, -5, -6, -7, -8, -9]);
});
