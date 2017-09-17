/* @flow */

const tail = require('./tail');

test('it works', () => {
  expect(Array.from(tail('abcde')).join('')).toEqual('bcde');
});
