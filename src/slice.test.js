/* @flow */

const slice = require('./slice');

test('it works', () => {
  expect(Array.from(slice('abcde', 1)).join('')).toEqual('bcde');
  expect(Array.from(slice('abcde', 1, 3)).join('')).toEqual('bc');
});
