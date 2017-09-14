/* @flow */

const cycle = require('./cycle');
const slice = require('./slice');

test('it works', () => {
  expect(Array.from(slice(cycle('AB'), 0, 10)).join('')).toBe('ABABABABAB');
});
