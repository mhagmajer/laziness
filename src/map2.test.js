/* @flow */

const range = require('./range');
const map2 = require('./map2');

test('it works', () => {
  expect(Array.from(map2((x, y) => x + y, range(1, 4), range(10, 40, 10)))).toEqual([11, 22, 33]);
});
