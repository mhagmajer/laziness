/* @flow */

/**
 */
function* range(from: number, to: number, step: number = 1): Generator<number, void, void> {
  for (let i = from; i !== to; i += step) {
    yield i;
  }
}

module.exports = range;
