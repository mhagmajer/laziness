/* @flow */

/**
 * Repeats value endlessly or up to limit times.
 * @example
 * repeat(5) // 5, 5, 5, 5, ...
 * @example
 * repeat(10, 3) // 10, 10, 10
 */
function* repeat<T>(value: T, limit?: number = Infinity): Generator<T, void, void> {
  for (let i = 0; i < limit; i += 1) {
    yield value;
  }
}

module.exports = repeat;
