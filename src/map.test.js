/* @flow */

const range = require('./range');
const map = require('./map');

test('it works', () => {
  expect(Array.from(map(range(1, 4), x => x * 2))).toEqual([2, 4, 6]);
});
