/* @flow */

const forEach = require('./for-each');

test('it works', () => {
  const cb = jest.fn();
  forEach('abc', cb);
  expect(cb).toHaveBeenCalledWith('a');
  expect(cb).toHaveBeenCalledWith('b');
  expect(cb).toHaveBeenCalledWith('c');
  expect(cb).toHaveBeenCalledTimes(3);
});
