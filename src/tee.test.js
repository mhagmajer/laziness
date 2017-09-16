/* @flow */

const tee = require('./tee');

test('it works', () => {
  const [iter1, iter2] = tee('test');
  expect(Array.from(iter1).join('')).toEqual('test');
  expect(Array.from(iter2).join('')).toEqual('test');
});
