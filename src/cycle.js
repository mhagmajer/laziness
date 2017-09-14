/* @flow */

/**
 * Generates all elements of the iterable. Once the original iterable is exhausted, yields all
 * elements again. Repeats indefinitely.
 * @example
 * cycle('ABC') // 'A', 'B', 'C', 'A', 'B', 'C', ...
 */
function* cycle<T>(iter: Iterable<T>): Generator<T, void, void> {
  const copy = [];
  for (const x of iter) {
    yield x;
    copy.push(x);
  }
  while (1) {
    yield* copy;
  }
}

module.exports = cycle;
