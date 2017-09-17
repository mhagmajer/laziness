/* @flow */

const slice = require('./slice');

/**
 * Skips first element of iterable
 */
function* tail<T>(iter: Iterable<T>): Generator<T, void, void> {
  yield* slice(iter, 1);
}

module.exports = tail;
