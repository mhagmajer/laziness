/* @flow */

const repeat = require('./repeat');
const slice = require('./slice');

test('it works', () => {
  expect(Array.from(slice(repeat('A'), 0, 10)).join('')).toBe('AAAAAAAAAA');
  expect(Array.from(repeat(10, 3))).toEqual([10, 10, 10]);
});
