/* @flow */

const range = require('./range');
const filter = require('./filter');

test('it works', () => {
  expect(Array.from(filter(range(0, 10), x => x % 2 === 0))).toEqual([0, 2, 4, 6, 8]);
});
